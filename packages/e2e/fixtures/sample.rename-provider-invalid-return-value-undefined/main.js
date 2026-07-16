const renameProvider = {
  languageId: 'rename-invalid-return-value-undefined',
  provideRename(textDocument, offset) {
    // TODO compute rename
  },
}
export const activate = () => {
  vscode.registerRenameProvider(renameProvider)
}
