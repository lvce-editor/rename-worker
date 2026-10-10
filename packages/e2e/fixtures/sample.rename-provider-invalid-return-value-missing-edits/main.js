import { activate, registerRenameProvider } from '@lvce-editor/api'

const renameProvider = {
  id: 'rename-invalid-return-value-missing-edits',
  languageId: 'rename-invalid-return-value-missing-edits',
  prepareRename() {
    return {}
  },
  provideRename(textDocument, offset, newName) {
    return {
      canRename: true,
    }
  },
}
await activate()
registerRenameProvider(renameProvider)
