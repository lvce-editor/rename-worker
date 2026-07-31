import { activate, registerRenameProvider } from '@lvce-editor/api'

const renameProvider = {
  id: 'rename-apply-invalid-inserted-text',
  languageId: 'rename-apply-invalid-inserted-text',
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
await activate()
registerRenameProvider(renameProvider)
