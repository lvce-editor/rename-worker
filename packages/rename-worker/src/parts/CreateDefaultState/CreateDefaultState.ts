import type { RenameState } from '../RenameState/RenameState.ts'

export const createDefaultState = (): RenameState => {
  return {
    editorLanguageId: '',
    focused: false,
    focusedIndex: 0,
    height: 0,
    inputSource: 0,
    newValue: '',
    oldValue: '',
    parentUid: 1,
    selectionEnd: 0,
    selectionStart: 0,
    uid: 0,
    version: 0,
    width: 0,
    x: 0,
    y: 0,
  }
}
