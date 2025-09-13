import { type VirtualDomNode, text } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const parentNode: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.EditorRename),
  childCount: 1,
}

export const getRenameErrorVirtualDom = (errorMessage: string): readonly VirtualDomNode[] => {
  return [parentNode, text(errorMessage)]
}
