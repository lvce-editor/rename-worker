const renameProvider = {
  languageId: 'xyz',
  provideRename(textDocument, offset) {
    throw new Error('oops')
  },
}
export const activate = () => {
  vscode.registerRenameProvider(renameProvider)
}
