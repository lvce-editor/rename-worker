import { test, expect } from '@jest/globals'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import * as ExtensionHostRename from '../src/parts/ExtensionHostRename/ExtensionHostRename.ts'

test.skip('executeRenameProvider calls ExtensionHostEditor.execute with correct args', async () => {
  let lastArgs: any = null
  EditorWorker.registerMockRpc({
    'ExtensionHostManagement.activateByEvent': () => {
      return undefined
    },
    'ExtensionHostWorker.invoke': (_method: any, _uid: any, method: any, ...args: readonly any[]) => {
      lastArgs = { method, uid: 123, args }
      return 'executed'
    },
  })

  const editor = { languageId: 'js' } as any
  const offset = 42
  const newName = 'fooBar'
  // @ts-ignore
  const result = await ExtensionHostRename.executeRenameProvider(editor, offset, newName)
  expect(result).toBe('executed')
  expect(lastArgs.method).toBeDefined()
  expect(lastArgs.uid).toBe(123)
  expect(lastArgs.args).toEqual([offset, newName])
})
