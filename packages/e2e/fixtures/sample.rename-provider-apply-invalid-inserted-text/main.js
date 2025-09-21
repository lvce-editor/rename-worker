const renameProvider = {
  languageId: 'xyz',
  provideRename(textDocument, offset, newName) {
    return {
      canRename: true,
      edits: [
        {
          uri: textDocument.uri,
          edits: [
            {
              offset: 4,
              inserted: null,
              deleted: 1,
            },
          ],
        },
      ],
    }
  },
}
export const activate = () => {
  vscode.registerRenameProvider(renameProvider)
}
