import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.editor-no-prepare-rename'

export const test: Test = async ({ Editor, expect, Extension, FileSystem, Locator, Main, Workspace }) => {
  const extensionUri = import.meta.resolve('../fixtures/sample.rename-provider-no-prepare')
  await Extension.addWebExtension(extensionUri)
  const tmpDir = await FileSystem.getTmpDir()
  const uri = `${tmpDir}/file.rename-provider-no-prepare`
  await FileSystem.writeFile(uri, 'let x = 1\n')
  await Workspace.setPath(tmpDir)
  await Main.openUri(uri)
  await Editor.setCursor(0, 5)

  await Editor.openRename()

  const renameWidget = Locator('.EditorRename')
  const editorInput = Locator('.EditorInput textarea')
  const renameDecoration = Locator('.Token.R')
  await expect(renameWidget).toBeHidden()
  await expect(editorInput).toBeFocused()
  await expect(renameDecoration).toHaveCount(0)
  await Editor.shouldHaveText('let x = 1\n')
}
