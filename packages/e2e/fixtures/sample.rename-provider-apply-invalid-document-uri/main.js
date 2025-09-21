const renameProvider = {
  languageId: 'xyz',
  provideRename(textDocument, offset, newName) {
    return {
      canRename: true,
      edits: [
        {
          uri: null,
          edits: [{}],
        },
      ],
    }
  },
}
export const activate = () => {
  vscode.registerRenameProvider(renameProvider)
}
