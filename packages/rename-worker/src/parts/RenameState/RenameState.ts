export interface RenameState {
  readonly uid: number
  readonly focusedIndex: number
  readonly focused: boolean
  readonly oldValue: string
  readonly newValue: string
  readonly x: number
  readonly y: number
  readonly width: number
  readonly height: number
  readonly version: number
  readonly parentUid: number
  readonly selectionStart: number
  readonly selectionEnd: number
  readonly editorLanguageId: string
}
