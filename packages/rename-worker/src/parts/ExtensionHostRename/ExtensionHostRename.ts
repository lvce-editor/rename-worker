import * as ExtensionHostActivationEvent from '../ExtensionHostActivationEvent/ExtensionHostActivationEvent.ts'
import * as ExtensionHostCommandType from '../ExtensionHostCommandType/ExtensionHostCommandType.ts'
import * as ExtensionHostEditor from '../ExtensionHostEditor/ExtensionHostEditor.ts'

const combineResults = (results: any): readonly any[] => {
  return results[0] ?? []
}

export const executeRenameProvider = async (editorUid: number, editorLanguageId: string, offset: number, newName: string): Promise<void> => {
  return ExtensionHostEditor.execute({
    editorUid: editorUid,
    editorLanguageId,
    event: ExtensionHostActivationEvent.OnRename,
    method: ExtensionHostCommandType.RenameExecuteRename,
    args: [offset, newName],
    combineResults,
  })
}
