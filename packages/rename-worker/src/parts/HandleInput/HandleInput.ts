import type { RenameState } from '../RenameState/RenameState.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const handleInput = async (state: RenameState, value: string, inputSource = InputSource.User): Promise<RenameState> => {
  return {
    ...state,
    newValue: value,
    inputSource,
  }
}
