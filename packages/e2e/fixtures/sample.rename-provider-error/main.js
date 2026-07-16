const renameProvider = {
  languageId: 'rename-error',
  provideRename(textDocument, offset) {
    throw new Error('oops')
  },
}
export const activate = () => {
  vscode.registerRenameProvider(renameProvider)
}
