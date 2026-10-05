import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.editor-cannot-rename'

export const skip = 1

export const test: Test = async ({ Editor, expect, FileSystem, Locator, Main, Workspace }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(
    `${tmpDir}/file.txt`,
    `let x = 1
`,
  )
  await Workspace.setPath(tmpDir)
  await Main.openUri(`${tmpDir}/file.txt`)
  await Editor.setCursor(0, 5)

  // act
  await Editor.openRename()

  // assert
  const renameWidget = Locator('.EditorRename')
  const editorInput = Locator('.EditorInput textarea')
  const renameDecoration = Locator('.Token.R')
  await expect(renameWidget).toBeHidden()
  await expect(editorInput).toBeFocused()
  await expect(renameDecoration).toHaveCount(0)
  await Editor.shouldHaveText('let x = 1\n')
}
