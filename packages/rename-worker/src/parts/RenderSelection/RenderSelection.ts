import type { RenameState } from '../RenameState/RenameState.ts'
import * as InputName from '../InputName/InputName.ts'

export const renderSelection = (oldState: RenameState, newState: RenameState): readonly any[] => {
  const { selectionEnd, selectionStart, uid } = newState
  return [/* method */ 'Viewlet.setSelectionByName', uid, InputName.Rename, selectionStart, selectionEnd]
}
