import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.editor-rename'

export const skip = true

export const test: Test = async ({ Editor, expect, FileSystem, FindWidget, Locator, Main, Workspace }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(
    `${tmpDir}/file.js`,
    `let x = 1
`,
  )
  await Workspace.setUri(tmpDir)
  await Main.openUri(`${tmpDir}/file.js`)
  await Editor.setCursor(0, 5)

  // act
  await Editor.openRename()

  // assert
  const renameWidget = Locator('.EditorRename')
  await expect(renameWidget).toBeVisible()
  const renameInput = Locator('.RenameInputBox')
  await expect(renameInput).toBeVisible()
  await expect(renameInput).toBeFocused()
}
