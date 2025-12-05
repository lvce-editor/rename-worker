import * as ExtensionHostActivationEvent from '../ExtensionHostActivationEvent/ExtensionHostActivationEvent.ts'
import * as ExtensionHostCommandType from '../ExtensionHostCommandType/ExtensionHostCommandType.ts'
import * as ExtensionHostEditor from '../ExtensionHostEditor/ExtensionHostEditor.ts'

const combineResults = (results: any): readonly any[] => {
  return results[0] ?? []
}

export const executeRenameProvider = async (editorUid: number, editorLanguageId: string, offset: number, newName: string): Promise<any> => {
  return ExtensionHostEditor.execute({
    args: [offset, newName],
    combineResults,
    editorLanguageId,
    editorUid: editorUid,
    event: ExtensionHostActivationEvent.OnRename,
    method: ExtensionHostCommandType.RenameExecuteRename,
  })
}
