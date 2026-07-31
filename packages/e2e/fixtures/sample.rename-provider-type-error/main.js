import { activate, registerRenameProvider } from '@lvce-editor/api'

const renameProvider = {
  id: 'rename-type-error',
  languageId: 'rename-type-error',
  provideRename(textDocument, offset) {
    throw new TypeError('x is not a function')
  },
}
await activate()
registerRenameProvider(renameProvider)
