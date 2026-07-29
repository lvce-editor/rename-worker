import type { RenameState } from '../RenameState/RenameState.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderUid = (oldState: RenameState, newState: RenameState): readonly any[] => {
  const { parentUid, uid } = newState
  return [RenderMethod.SetUid, uid, parentUid]
}
