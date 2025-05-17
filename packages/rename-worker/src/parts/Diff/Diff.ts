import type { RenameState } from '../RenameState/RenameState.ts'
import * as DiffModules from '../DiffModules/DiffModules.ts'

export const diff = (oldState: RenameState, newState: RenameState): readonly number[] => {
  const diffResult: number[] = []
  for (let i = 0; i < DiffModules.modules.length; i++) {
    const fn = DiffModules.modules[i]
    if (!fn(oldState, newState)) {
      diffResult.push(DiffModules.numbers[i])
    }
  }
  return diffResult
}
