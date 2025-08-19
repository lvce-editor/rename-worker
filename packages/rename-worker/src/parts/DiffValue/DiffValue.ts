import type { RenameState } from '../RenameState/RenameState.ts'

export const isEqual = (oldState: RenameState, newState: RenameState): boolean => {
  return oldState.oldValue === newState.oldValue && oldState.newValue === newState.newValue
}
