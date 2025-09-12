const renameProvider = {
  languageId: 'xyz',
  provideRename(textDocument, offset) {
    // TODO compute rename
    return {
      canRename: true,
      edits: [
        {
          uri: textDocument.uri,
          edits: [
            {
              offset: 4,
              inserted: 'y',
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
