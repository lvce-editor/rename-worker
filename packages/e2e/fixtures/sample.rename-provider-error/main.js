import { activate, registerRenameProvider } from '@lvce-editor/api'

const renameProvider = {
  id: 'rename-error',
  languageId: 'rename-error',
  provideRename(textDocument, offset) {
    throw new Error('oops')
  },
}
await activate()
registerRenameProvider(renameProvider)
