import type { RenameState } from '../RenameState/RenameState.ts'
import * as EditorCommandGetWordAt from '../EditorCommandGetWordAt/EditorCommandGetWordAt.ts'
import * as GetPositionAtCursor from '../GetPositionAtCursor/GetPositionAtCursor.ts'
import * as GetRenamePosition from '../GetRenamePosition/GetRenamePosition.ts'

export const loadContent = async (state: RenameState): Promise<Promise<RenameState>> => {
  const { parentUid } = state
  const { rowIndex, columnIndex, x, y } = await GetPositionAtCursor.getPositionAtCursor(parentUid)
  const word = await EditorCommandGetWordAt.getWordAt(parentUid, rowIndex, columnIndex)
  if (!word) {
    return state
  }
  // TODO query if can rename from extension host
  const { x: renameX, y: renameY, width, height } = GetRenamePosition.getRenamePosition(x, y)
  // TODO
  // 1. query position at cursor
  // 2. the bounds for position
  // 3. show rename widget with bounds and focus it
  return {
    ...state,
    version: 1,
    x: renameX,
    y: renameY,
    width,
    height,
  }
}
