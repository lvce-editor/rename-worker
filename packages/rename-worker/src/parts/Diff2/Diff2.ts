import * as Diff from '../Diff/Diff.ts'
import * as RenameStates from '../RenameStates/RenameStates.ts'

export const diff2 = (uid: number): readonly number[] => {
  const { newState, oldState } = RenameStates.get(uid)
  const diffResult = Diff.diff(oldState, newState)
  return diffResult
}
