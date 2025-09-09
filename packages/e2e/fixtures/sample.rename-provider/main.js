const renameProvider = {
  languageId: 'xyz',
  provideRename(textDocument, offset) {
    // TODO compute rename
    return {
      canRename: true,
      edits: [],
    }
  },
}
export const activate = () => {
  vscode.registerRenameProvider(renameProvider)
}
