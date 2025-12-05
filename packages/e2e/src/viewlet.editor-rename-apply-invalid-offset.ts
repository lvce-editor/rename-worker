import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.editor-rename-apply-invalid-offset'

export const test: Test = async ({ Editor, Extension, FileSystem, Main, Workspace }) => {
  // arrange
  const extensionUri = import.meta.resolve('../fixtures/sample.rename-provider-apply-invalid-offset')
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

  // TODO maybe validate offset better
  // assert
  await Editor.shouldHaveText(`ylet x = 1
`)
}
