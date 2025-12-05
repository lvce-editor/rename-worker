import type { RenameState } from '../RenameState/RenameState.ts'
import * as ApplyWorkspaceEdit from '../ApplyWorkspaceEdit/ApplyWorkspaceEdit.ts'
import { close } from '../Close/Close.ts'
import * as ExtensionHostRename from '../ExtensionHostRename/ExtensionHostRename.ts'
import * as GetOffsetAtCursor from '../GetOffsetAtCursor/GetOffsetAtCursor.ts'
import * as Logger from '../Logger/Logger.ts'

export const accept = async (state: RenameState): Promise<RenameState> => {
  const { editorLanguageId, newValue, parentUid } = state
  const offset = await GetOffsetAtCursor.getOffsetAtCursor(parentUid)
  try {
    const result = await ExtensionHostRename.executeRenameProvider(parentUid, editorLanguageId, offset, newValue)
    await ApplyWorkspaceEdit.applyWorkspaceEdit(parentUid, result.edits)
    return close(state)
  } catch (error) {
    await Logger.error(error)
    return {
      ...state,
      errorMessage: `${error}`,
    }
  }
}
