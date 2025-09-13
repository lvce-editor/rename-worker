import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.editor-rename-invalid-return-value-missing-edits'

export const test: Test = async ({ Locator, expect, Extension, FileSystem, Workspace, Main, Editor }) => {
  // arrange
  const extensionUri = import.meta.resolve('../fixtures/sample.rename-provider-invalid-return-value-missing-edits')
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
  const viewlet = Locator('.Viewlet.EditorRename')
  await expect(viewlet).toBeVisible()
  await expect(viewlet).toHaveText(`AssertionError: expected value to be of type array`)
}
