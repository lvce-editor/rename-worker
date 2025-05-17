import type { RenameState } from '../RenameState/RenameState.ts'
import * as GetRenameVirtualDom from '../GetRenameVirtualDom/GetRenameVirtualDom.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderContent = (oldState: RenameState, newState: RenameState): readonly any[] => {
  const { uid } = newState
  const dom = GetRenameVirtualDom.getRenameVirtualDom(newState)
  return [RenderMethod.SetDom2, uid, dom]
}
