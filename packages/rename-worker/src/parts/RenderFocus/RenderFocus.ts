import type { RenameState } from '../RenameState/RenameState.ts'

export const renderFocus = (oldState: RenameState, newState: RenameState): readonly any[] => {
  const { uid } = newState
  return [/* method */ 'Viewlet.focusSelector', uid, '.RenameInputBox']
}
