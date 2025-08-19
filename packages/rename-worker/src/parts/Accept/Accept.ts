import * as ApplyWorkspaceEdit from '../ApplyWorkspaceEdit/ApplyWorkspaceEdit.ts'
import { close } from '../Close/Close.ts'
import * as ExtensionHostRename from '../ExtensionHostRename/ExtensionHostRename.ts'
import * as GetOffsetAtCursor from '../GetOffsetAtCursor/GetOffsetAtCursor.ts'
import type { RenameState } from '../RenameState/RenameState.ts'

export const accept = async (state: RenameState): Promise<RenameState> => {
  const { parentUid, editorLanguageId, newValue } = state
  const offset = await GetOffsetAtCursor.getOffsetAtCursor(parentUid)
  const result = await ExtensionHostRename.executeRenameProvider(parentUid, editorLanguageId, offset, newValue)
  await ApplyWorkspaceEdit.applyWorkspaceEdit(parentUid, result.edits)
  return close(state)
}
