import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetRenameInputVirtualDom from '../GetRenameInputVirtualDom/GetRenameInputVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import type { RenameState } from '../RenameState/RenameState.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getRenameVirtualDom = (state: RenameState): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.EditorRename),
      childCount: 1,
    },
    ...GetRenameInputVirtualDom.getRenameInputVirtualDom(),
  ]
}
