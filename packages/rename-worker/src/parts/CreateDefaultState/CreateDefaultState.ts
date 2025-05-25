import type { RenameState } from '../RenameState/RenameState.ts'

export const createDefaultState = (): RenameState => {
  return {
    uid: 0,
    height: 0,
    focused: false,
    focusedIndex: 0,
    newValue: '',
    oldValue: '',
    width: 0,
    x: 0,
    y: 0,
    version: 0,
    parentUid: 1,
    selectionEnd: 0,
    selectionStart: 0,
  }
}
