import { expect, test } from '@jest/globals'
import type { RenameState } from '../src/parts/RenameState/RenameState.ts'
import * as GetRenameVirtualDom from '../src/parts/GetRenameVirtualDom/GetRenameVirtualDom.ts'
import * as RenameWidgetFactory from '../src/parts/RenameWidgetFactory/RenameWidgetFactory.ts'

test('getRenameVirtualDom', () => {
  const widget = RenameWidgetFactory.create()
  const state: RenameState = {
    ...widget.newState,
    oldValue: 'a',
    newValue: 'b',
  }
  expect(GetRenameVirtualDom.getRenameVirtualDom(state)).toEqual([
    {
      childCount: 2,
      className: 'Viewlet EditorRename',
      type: 4,
    },
    {
      childCount: 0,
      className: 'InputBox RenameInputBox',
      type: 6,
      onBlur: 'handleBlur',
      name: 'Rename',
    },
    {
      childCount: 1,
      className: 'RenameDetails',
      type: 4,
    },
    {
      childCount: 0,
      text: 'Press Enter to Rename',
      type: 12,
    },
  ])
})
