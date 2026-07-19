import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import type { RenameState } from '../RenameState/RenameState.ts'
import { getRenameDefaultVirtualDom } from '../GetRenameDefaultVirtualDom/GetRenameDefaultVirtualDom.ts'
import { getRenameErrorVirtualDom } from '../GetRenameErrorVirtualDom/GetRenameErrorVirtualDom.ts'

export const getRenameVirtualDom = (state: RenameState): readonly VirtualDomNode[] => {
  const { errorMessage } = state
  if (errorMessage) {
    return getRenameErrorVirtualDom(errorMessage)
  }
  return getRenameDefaultVirtualDom(state)
}
