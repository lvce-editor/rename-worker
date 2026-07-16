import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.editor-rename-apply-invalid-edits'

export const test: Test = async ({ Editor, expect, Extension, FileSystem, Locator, Main, Workspace }) => {
  // arrange
  const extensionUri = import.meta.resolve('../fixtures/sample.rename-provider-apply-invalid-edits')
  await Extension.addWebExtension(extensionUri)
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(
    `${tmpDir}/file.rename-apply-invalid-edits`,
    `let x = 1
`,
  )
  await Workspace.setPath(tmpDir)
  await Main.openUri(`${tmpDir}/file.rename-apply-invalid-edits`)
  await Editor.setCursor(0, 4)

  // act
  await Editor.rename2('y')

  // assert
  const viewlet = Locator('.Viewlet.EditorRename', {
    hasText: `VError: Failed to execute rename provider: invalid rename result: renameResult item edits must be of type array`,
  })
  await expect(viewlet).toBeVisible()
  await expect(viewlet).toHaveText(`VError: Failed to execute rename provider: invalid rename result: renameResult item edits must be of type array`)
}
