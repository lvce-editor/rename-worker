import * as Diff from '../Diff/Diff.ts'
import * as RenameStates from '../RenameStates/RenameStates.ts'

export const diff2 = (uid: number): readonly number[] => {
  const { oldState, newState } = RenameStates.get(uid)
  const diffResult = Diff.diff(oldState, newState)
  return diffResult
}
