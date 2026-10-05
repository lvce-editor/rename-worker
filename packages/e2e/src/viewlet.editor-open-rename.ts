import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.editor-rename'

export const test: Test = async ({ Editor, expect, Extension, FileSystem, Locator, Main, Workspace }) => {
  // arrange
  const extensionUri = import.meta.resolve('../fixtures/sample.rename-provider')
  await Extension.addWebExtension(extensionUri)
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(
    `${tmpDir}/file.rename-provider`,
    `let x = 1
`,
  )
  await Workspace.setPath(tmpDir)
  await Main.openUri(`${tmpDir}/file.rename-provider`)
  await Editor.setCursor(0, 5)

  // act
  await Editor.openRename()

  // assert
  const renameWidget = Locator('.EditorRename')
  await expect(renameWidget).toBeVisible()
  await expect(renameWidget).toHaveCSS('top', '85px')
  await expect(renameWidget).toHaveCSS('left', '45px')
  const renameInput = Locator('.RenameInputWrapper > .RenameInputBox')
  await expect(renameInput).toBeVisible()
  await expect(renameInput).toBeFocused()
  await expect(renameInput).toHaveAttribute('autocomplete', 'off')

}
