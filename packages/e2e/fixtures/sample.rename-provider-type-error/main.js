const renameProvider = {
  languageId: 'rename-type-error',
  provideRename(textDocument, offset) {
    throw new TypeError('x is not a function')
  },
}
export const activate = () => {
  vscode.registerRenameProvider(renameProvider)
}
