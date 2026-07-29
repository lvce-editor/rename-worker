import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputName from '../InputName/InputName.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const renameInputWrapperNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.RenameInputWrapper,
  type: VirtualDomElements.Div,
}

const renameInputNode: VirtualDomNode = {
  autocomplete: 'off',
  childCount: 0,
  className: MergeClassNames.mergeClassNames(ClassNames.InputBox, ClassNames.RenameInputBox),
  name: InputName.Rename,
  onBlur: DomEventListenerFunctions.HandleBlur,
  onInput: DomEventListenerFunctions.HandleInput,
  type: VirtualDomElements.Input,
}

export const getRenameInputVirtualDom = (): readonly VirtualDomNode[] => {
  return [renameInputWrapperNode, renameInputNode]
}
