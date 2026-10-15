import { expect, test } from '@jest/globals'
import { EditorWorker, ExtensionManagementWorker } from '@lvce-editor/rpc-registry'
import { executeRenameProvider } from '../src/parts/ExtensionManagementRename/ExtensionManagementRename.ts'

test('executeRenameProvider calls the isolated rename provider through extension management', async () => {
  using editorRpc = EditorWorker.registerMockRpc({
    'Editor.getText': () => 'const alpha = 1',
    'Editor.getUri': () => 'file:///test.rename-test',
  })
  const renameResult = {
    canRename: true,
    edits: [],
  }
  using extensionManagementRpc = ExtensionManagementWorker.registerMockRpc({
    'Extensions.executeLanguageProvider': () => ({ found: true, result: renameResult }),
  })

  await expect(executeRenameProvider(12, 'rename-test', 8, 'beta')).resolves.toBe(renameResult)
  expect(editorRpc.invocations).toEqual([
    ['Editor.getText', 12],
    ['Editor.getUri', 12],
  ])
  expect(extensionManagementRpc.invocations).toEqual([
    [
      'Extensions.executeLanguageProvider',
      'rename',
      'provideRename',
      {
        documentId: 12,
        languageId: 'rename-test',
        text: 'const alpha = 1',
        uri: 'file:///test.rename-test',
      },
      8,
      'beta',
    ],
  ])
})

test('executeRenameProvider returns no edits when no provider is found', async () => {
  using _editorRpc = EditorWorker.registerMockRpc({
    'Editor.getText': () => '',
    'Editor.getUri': () => 'file:///test.txt',
  })
  using _extensionManagementRpc = ExtensionManagementWorker.registerMockRpc({
    'Extensions.executeLanguageProvider': () => ({ found: false }),
  })

  await expect(executeRenameProvider(1, 'plaintext', 0, 'beta')).resolves.toEqual({ edits: [] })
})

test('executeRenameProvider validates isolated provider results', async () => {
  using _editorRpc = EditorWorker.registerMockRpc({
    'Editor.getText': () => 'let x = 1',
    'Editor.getUri': () => 'file:///test.rename-test',
  })
  using _extensionManagementRpc = ExtensionManagementWorker.registerMockRpc({
    'Extensions.executeLanguageProvider': () => ({
      found: true,
      result: {
        canRename: true,
        edits: [{ edits: {}, uri: 'file:///test.rename-test' }],
      },
    }),
  })

  await expect(executeRenameProvider(1, 'rename-test', 4, 'y')).rejects.toThrow(
    'Failed to execute rename provider: invalid rename result: renameResult item edits must be of type array',
  )
})

test('application rename requests retain the owner of the editor being renamed', async () => {
  using _editor = EditorWorker.registerMockRpc({
    'Editor.getText': () => 'let color = blue',
    'Editor.getUri': () => 'memfs:///example.txt',
  })
  const renamed = { canRename: true, edits: [] }
  using management = ExtensionManagementWorker.registerMockRpc({
    'Extensions.invokeForApplication': () => ({ found: true, result: renamed }),
  })
  await expect(executeRenameProvider(12, 'plaintext', 5, 'shade', 'preview')).resolves.toBe(renamed)
  expect(management.invocations).toEqual([
    [
      'Extensions.invokeForApplication',
      'preview',
      'Extensions.executeLanguageProvider',
      'rename',
      'provideRename',
      { documentId: 12, languageId: 'plaintext', text: 'let color = blue', uri: 'memfs:///example.txt' },
      5,
      'shade',
    ],
  ])
})
