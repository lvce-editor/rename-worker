const renameProvider = {
  languageId: 'xyz',
  provideRename(textDocument, offset, newName) {
    return {
      canRename: true,
    }
  },
}
export const activate = () => {
  vscode.registerRenameProvider(renameProvider)
}
