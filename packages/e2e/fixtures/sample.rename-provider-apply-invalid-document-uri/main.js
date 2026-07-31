import { activate, registerRenameProvider } from '@lvce-editor/api'

const renameProvider = {
  id: 'rename-apply-invalid-document-uri',
  languageId: 'rename-apply-invalid-document-uri',
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
await activate()
registerRenameProvider(renameProvider)
