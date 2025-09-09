const renameProvider = {
  languageId: 'xyz',
  provideRename(textDocument, offset) {
    // TODO compute rename
  },
}
export const activate = () => {
  vscode.registerRenameProvider(renameProvider)
}
