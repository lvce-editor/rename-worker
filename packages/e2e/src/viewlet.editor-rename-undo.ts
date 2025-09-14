import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.editor-rename-undo'

export const skip = 1

export const test: Test = async ({ Extension, FileSystem, Workspace, Main, Editor, Command }) => {
  // arrange
  const extensionUri = import.meta.resolve('../fixtures/sample.rename-provider')
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
  await Editor.rename2('y')

  // act
  await Editor.undo()

  // assert
  await Editor.shouldHaveText(`let x = 1
`)
}
