import type { RenameState } from '../RenameState/RenameState.ts'
import * as RenameStates from '../RenameStates/RenameStates.ts'

export const create = (uid: number, x: number, y: number, width: number, height: number, parentUid: number): RenameState => {
  const state: RenameState = {
    uid,
    height,
    focused: false,
    focusedIndex: 0,
    newValue: '',
    oldValue: '',
    width,
    x,
    y,
    version: 0,
  }
  RenameStates.set(uid, state, state)
  return state
}
