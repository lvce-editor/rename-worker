import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import type { RenameState } from '../RenameState/RenameState.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetRenameDetailsVirtualDom from '../GetRenameDetailsVirtualDom/GetRenameDetailsVirtualDom.ts'
import * as GetRenameInputVirtualDom from '../GetRenameInputVirtualDom/GetRenameInputVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getRenameDefaultVirtualDom = (state: RenameState): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.EditorRename),
      childCount: 2,
    },
    ...GetRenameInputVirtualDom.getRenameInputVirtualDom(),
    ...GetRenameDetailsVirtualDom.getRenameDetailsVirtualDom(),
  ]
}
