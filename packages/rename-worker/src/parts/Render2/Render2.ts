import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as RenameStates from '../RenameStates/RenameStates.ts'

export const render2 = (uid: number, diffResult: readonly number[]): readonly any[] => {
  const { oldState, newState } = RenameStates.get(uid)
  RenameStates.set(uid, newState, newState)
  const commands = ApplyRender.applyRender(oldState, newState, diffResult)
  return commands
}
