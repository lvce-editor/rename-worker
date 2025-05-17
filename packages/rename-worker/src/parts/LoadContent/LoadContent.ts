import type { RenameState } from '../RenameState/RenameState.ts'

export const loadContent = (state: RenameState): RenameState => {
  // TODO
  // 1. query position at cursor
  // 2. the bounds for position
  // 3. show rename widget with bounds and focus it
  return {
    ...state,
    version: 1,
  }
}
