import { activate, registerRenameProvider } from '@lvce-editor/api'

const renameProvider = {
  id: 'rename-provider',
  languageId: 'rename-provider',
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
await activate()
registerRenameProvider(renameProvider)
