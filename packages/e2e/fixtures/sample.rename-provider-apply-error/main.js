const renameProvider = {
  languageId: 'xyz',
  provideRename(textDocument, offset, newName) {
    return {
      canRename: true,
      edits: [
        {
          uri: textDocument.uri,
          edits: [null],
        },
      ],
    }
  },
}
export const activate = () => {
  vscode.registerRenameProvider(renameProvider)
}
