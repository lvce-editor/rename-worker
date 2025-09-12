const renameProvider = {
  languageId: 'xyz',
  provideRename(textDocument, offset, newName) {
    // TODO compute rename
    return {
      canRename: true,
      edits: [
        {
          uri: textDocument.uri,
          edits: [
            {
              offset: 4,
              inserted: newName,
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
