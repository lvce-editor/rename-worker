const renameProvider = {
  languageId: 'rename-invalid-return-value-missing-edits',
  provideRename(textDocument, offset, newName) {
    return {
      canRename: true,
    }
  },
}
export const activate = () => {
  vscode.registerRenameProvider(renameProvider)
}
