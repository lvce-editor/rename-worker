import { activate, registerRenameProvider } from '@lvce-editor/api'

const renameProvider = {
  id: 'rename-apply-invalid-edits',
  languageId: 'rename-apply-invalid-edits',
  provideRename(textDocument, offset, newName) {
    return {
      canRename: true,
      edits: [
        {
          uri: textDocument.uri,
          edits: {
            offset: 4,
            inserted: null,
            deleted: 1,
          },
        },
      ],
    }
  },
}
await activate()
registerRenameProvider(renameProvider)
