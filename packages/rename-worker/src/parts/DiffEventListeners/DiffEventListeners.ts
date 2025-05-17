import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'

export const isEqual = (oldState: ColorPickerState, newState: ColorPickerState): boolean => {
  return oldState.version === newState.version
}
