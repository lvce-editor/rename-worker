import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.editor-rename-invalid-return-value-missing-edits'

export const test: Test = async ({ Editor, expect, Extension, FileSystem, Locator, Main, Workspace }) => {
  // arrange
  const extensionUri = import.meta.resolve('../fixtures/sample.rename-provider-invalid-return-value-missing-edits')
  await Extension.addWebExtension(extensionUri)
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(
    `${tmpDir}/file.rename-invalid-return-value-missing-edits`,
    `let x = 1
`,
  )
  await Workspace.setPath(tmpDir)
  await Main.openUri(`${tmpDir}/file.rename-invalid-return-value-missing-edits`)
  await Editor.setCursor(0, 4)

  // act
  await Editor.rename2('y')

  // assert
  const viewlet = Locator('.Viewlet.EditorRename', {
    hasText: `VError: Failed to execute rename provider: invalid rename result: renameResult.edits must be of type array`,
  })
  await expect(viewlet).toBeVisible()
  await expect(viewlet).toHaveText(`VError: Failed to execute rename provider: invalid rename result: renameResult.edits must be of type array`)
}
