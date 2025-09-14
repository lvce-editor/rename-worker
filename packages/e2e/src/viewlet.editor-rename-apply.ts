import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.editor-rename-apply'

export const test: Test = async ({ Extension, FileSystem, Workspace, Main, Editor }) => {
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

  // act
  await Editor.rename2('y')

  // assert
  await Editor.shouldHaveText(`let y = 1
`)
}
