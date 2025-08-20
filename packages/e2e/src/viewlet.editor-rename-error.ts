import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.editor-rename-error'

export const test: Test = async ({ Extension, FileSystem, Workspace, Main, Editor, Locator, expect, FindWidget }) => {
  // arrange
  const extensionUri = import.meta.resolve('../fixtures/sample.rename-provider-error')
  await Extension.addWebExtension(extensionUri)
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(
    `${tmpDir}/file.xyz`,
    `let x = 1
`,
  )
  await Workspace.setPath(tmpDir)
  await Main.openUri(`${tmpDir}/file.xyz`)
  await Editor.setCursor(0, 4)

  await Editor.openRename()
  const renameWidget = Locator('.EditorRename')
  await expect(renameWidget).toBeVisible()
  const renameInput = Locator('.RenameInputBox')
  await expect(renameInput).toBeVisible()

  // act

  // TODO
  // 1. type a value
  // 2. press enter
  // 3. verify an error message occurs

  // assert
}
