import { expect, test } from '@jest/globals'
import type { RenameState } from '../src/parts/RenameState/RenameState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as GetRenameVirtualDom from '../src/parts/GetRenameVirtualDom/GetRenameVirtualDom.ts'

test('getRenameVirtualDom', () => {
  const state: RenameState = {
    ...createDefaultState(),
    newValue: 'b',
    oldValue: 'a',
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
      name: 'Rename',
      onBlur: 'handleBlur',
      onInput: 'handleInput',
      type: 6,
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
