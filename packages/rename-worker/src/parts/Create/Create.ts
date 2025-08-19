import type { RenameState } from '../RenameState/RenameState.ts'
import * as Assert from '../Assert/Assert.ts'
import * as RenameStates from '../RenameStates/RenameStates.ts'

export const create = (
  uid: number,
  x: number,
  y: number,
  width: number,
  height: number,
  parentUid: number,
  editorLanguageId: string,
): RenameState => {
  Assert.number(uid)
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
    parentUid,
    selectionEnd: 0,
    selectionStart: 0,
    editorLanguageId,
  }
  RenameStates.set(uid, state, state)
  return state
}
