import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputName from '../InputName/InputName.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getRenameInputVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 0,
      className: MergeClassNames.mergeClassNames(ClassNames.InputBox, ClassNames.RenameInputBox),
      name: InputName.Rename,
      onBlur: DomEventListenerFunctions.HandleBlur,
      onInput: DomEventListenerFunctions.HandleInput,
      type: VirtualDomElements.Input,
    },
  ]
}
