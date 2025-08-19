import type { RenameState } from '../RenameState/RenameState.ts'

export const handleInput = async (state: RenameState, value: string): Promise<RenameState> => {
  return {
    ...state,
    newValue: value,
  }
}
