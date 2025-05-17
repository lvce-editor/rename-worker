import type { RenameState } from '../RenameState/RenameState.ts'

export const isEqual = (oldState: RenameState, newState: RenameState): boolean => {
  return oldState.x === newState.x && oldState.y === newState.y && oldState.width === newState.width && oldState.height === newState.height
}
