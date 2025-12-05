import { expect, test } from '@jest/globals'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { loadContent } from '../src/parts/LoadContent/LoadContent.ts'

test('loadContent - no word at cursor', async () => {
  EditorWorker.registerMockRpc({
    'Editor.getPositionAtCursor': () => {
      return { columnIndex: 0, rowIndex: 0, x: 0, y: 0 }
    },
    'Editor.getWordAt2': () => {
      return null
    },
  })

  const state = createDefaultState()
  const result = await loadContent(state)
  expect(result).toBe(state)
})

test('loadContent - with word at cursor', async () => {
  EditorWorker.registerMockRpc({
    'Editor.getPositionAtCursor': () => {
      return { columnIndex: 0, rowIndex: 0, x: 100, y: 100 }
    },
    'Editor.getWordAt2': () => {
      return 'test'
    },
  })

  const state = createDefaultState()
  const result = await loadContent(state)
  expect(result).toEqual({
    ...state,
    focused: true,
    height: 80,
    oldValue: 'test',
    selectionEnd: 4,
    version: 1,
    width: 300,
    x: 100,
    y: 110,
  })
})
