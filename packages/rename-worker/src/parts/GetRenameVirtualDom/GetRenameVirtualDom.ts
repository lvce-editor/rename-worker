import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import type { RenameState } from '../RenameState/RenameState.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getRenameVirtualDom = (state: RenameState): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.EditorRename),
      childCount: 1,
    },
    {
      type: VirtualDomElements.Input,
      className: MergeClassNames.mergeClassNames(ClassNames.InputBox, ClassNames.RenameInputBox),
      value: state.newValue,
      childCount: 0,
      onBlur: DomEventListenerFunctions.HandleBlur,
    },
  ]
}
