import { type VirtualDomNode, text } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as RenameStrings from '../RenameStrings/RenameStrings.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getRenameDetailsVirtualDom = (): readonly VirtualDomNode[] => {
  const detailsText = RenameStrings.enterToRename()
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.RenameDetails,
      childCount: 1,
    },
    text(detailsText),
  ]
}
