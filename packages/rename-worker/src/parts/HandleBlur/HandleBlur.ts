import type { RenameState } from '../RenameState/RenameState.ts'

export const handleBlur = async (state: RenameState): Promise<RenameState> => {
  // TODO ask editor worker to close widget
  return state
}
