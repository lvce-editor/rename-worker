import { VError } from '@lvce-editor/verror'
import * as EditorWorker from '../EditorWorker/EditorWorker.ts'
import * as ExtensionManagementWorker from '../ExtensionManagementWorker/ExtensionManagementWorker.ts'

const validateResult = (renameResult: any): string => {
  if (renameResult === null || renameResult === undefined) {
    return ''
  }
  if (typeof renameResult !== 'object') {
    return 'rename result must be of type object'
  }
  if (typeof renameResult.canRename !== 'boolean') {
    return `renameResult.canRename must be of type boolean`
  }
  if (!Array.isArray(renameResult.edits)) {
    return `renameResult.edits must be of type array`
  }
  for (const item of renameResult.edits) {
    if (!item) {
      return `renameResult item must be defined`
    }
    if (typeof item !== 'object') {
      return `renameResult item must be of type object`
    }
    if (typeof item.uri !== 'string') {
      return `renameResult item uri must be of type string`
    }
    if (!Array.isArray(item.edits)) {
      return `renameResult item edits must be of type array`
    }
  }
  return ''
}

export const executeRenameProvider = async (editorUid: number, editorLanguageId: string, offset: number, newName: string): Promise<any> => {
  const [text, uri] = await Promise.all([EditorWorker.invoke('Editor.getText', editorUid), EditorWorker.invoke('Editor.getUri', editorUid)])
  const textDocument = {
    documentId: editorUid,
    languageId: editorLanguageId,
    text,
    uri,
  }
  try {
    const result = await ExtensionManagementWorker.invoke(
      'Extensions.executeLanguageProvider',
      'rename',
      'provideRename',
      textDocument,
      offset,
      newName,
    )
    if (!result.found) {
      return { edits: [] }
    }
    const renameResult = result.result ?? null
    const validationError = validateResult(renameResult)
    if (validationError) {
      throw new Error(`invalid rename result: ${validationError}`)
    }
    return renameResult
  } catch (error) {
    throw new VError(error, 'Failed to execute rename provider')
  }
}
