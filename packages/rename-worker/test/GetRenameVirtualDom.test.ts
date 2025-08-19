import { expect, test } from '@jest/globals'
import type { RenameState } from '../src/parts/RenameState/RenameState.ts'
import * as GetRenameVirtualDom from '../src/parts/GetRenameVirtualDom/GetRenameVirtualDom.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('getRenameVirtualDom', () => {
  const state: RenameState = {
    ...createDefaultState(),
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
      onInput: 'handleInput',
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
