import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.editor-rename-error'

export const test: Test = async ({ Extension, FileSystem, Workspace, Main, Editor }) => {
  // arrange
  const extensionUri = import.meta.resolve('../fixtures/sample.rename-provider-error')
  await Extension.addWebExtension(extensionUri)
  console.log('did import')
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
  // TODO
  // await Editor.rename2('y')

  // assert
  // TODO verify that error message is shown
}
