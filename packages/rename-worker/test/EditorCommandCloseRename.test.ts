import { test, expect } from '@jest/globals'
import * as EditorCommandCloseRename from '../src/parts/EditorCommandClose/EditorCommandCloseRename.js'

test('closeRename removes rename widget and sets focused', async () => {
  const editor = {
    selections: [0, 0],
    widgets: [
      { id: 1, type: 'other' },
      { id: 7, type: 'rename' },
      { id: 2, type: 'another' },
    ],
  }
  const result = await EditorCommandCloseRename.closeRename(editor)
  expect(result.widgets).toEqual([
    { id: 1, type: 'other' },
    { id: 2, type: 'another' },
  ])
  expect(result.focused).toBe(true)
})

test('closeRename returns editor unchanged if no rename widget', async () => {
  const editor = {
    selections: [0, 0],
    widgets: [
      { id: 1, type: 'other' },
      { id: 2, type: 'another' },
    ],
  }
  const result = await EditorCommandCloseRename.closeRename(editor)
  expect(result).toBe(editor)
})
