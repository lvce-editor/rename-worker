import type { RenameState } from '../RenameState/RenameState.ts'

export const close = async (state: RenameState): Promise<RenameState> => {
  // TODO ask editor worker to remove widget
  return state
}
