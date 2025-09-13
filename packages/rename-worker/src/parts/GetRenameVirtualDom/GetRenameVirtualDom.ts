import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { getRenameDefaultVirtualDom } from '../GetRenameDefaultVirtualDom/GetRenameDefaultVirtualDom.ts'
import { getRenameErrorVirtualDom } from '../GetRenameErrorVirtualDom/GetRenameErrorVirtualDom.ts'
import type { RenameState } from '../RenameState/RenameState.ts'

export const getRenameVirtualDom = (state: RenameState): readonly VirtualDomNode[] => {
  if (state.errorMessage) {
    return getRenameErrorVirtualDom(state.errorMessage)
  }
  return getRenameDefaultVirtualDom(state)
}
