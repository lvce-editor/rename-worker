import type { RenameState } from '../RenameState/RenameState.ts'
import * as InputName from '../InputName/InputName.ts'

export const renderValue = (oldState: RenameState, newState: RenameState): readonly any[] => {
  const { uid, newValue } = newState
  return [/* method */ 'Viewlet.setValueByName', uid, InputName.Rename, newValue]
}
