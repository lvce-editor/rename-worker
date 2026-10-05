import { activate, registerRenameProvider } from '@lvce-editor/api'

await activate()
registerRenameProvider({
  id: 'rename-provider-no-prepare',
  languageId: 'rename-provider-no-prepare',
  provideRename() {
    return { canRename: true, edits: [] }
  },
})
