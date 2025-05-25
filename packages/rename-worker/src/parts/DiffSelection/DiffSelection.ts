import type { RenameState } from '../RenameState/RenameState.ts'

export const isEqual = (oldState: RenameState, newState: RenameState): boolean => {
  return oldState.selectionStart === newState.selectionStart && oldState.selectionEnd === newState.selectionEnd
}
