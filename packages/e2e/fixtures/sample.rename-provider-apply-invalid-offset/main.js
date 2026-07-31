import { activate, registerRenameProvider } from '@lvce-editor/api'

const renameProvider = {
  id: 'rename-apply-invalid-offset',
  languageId: 'rename-apply-invalid-offset',
  provideRename(textDocument, offset, newName) {
    return {
      canRename: true,
      edits: [
        {
          uri: textDocument.uri,
          edits: [
            {
              offset: 'test',
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
