import { activate, registerRenameProvider } from '@lvce-editor/api'

const renameProvider = {
  id: 'rename-apply-error',
  languageId: 'rename-apply-error',
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
await activate()
registerRenameProvider(renameProvider)
