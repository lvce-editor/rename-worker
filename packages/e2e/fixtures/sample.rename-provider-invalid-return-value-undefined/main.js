import { activate, registerRenameProvider } from '@lvce-editor/api'

const renameProvider = {
  id: 'rename-invalid-return-value-undefined',
  languageId: 'rename-invalid-return-value-undefined',
  provideRename(textDocument, offset) {
    // TODO compute rename
  },
}
await activate()
registerRenameProvider(renameProvider)
