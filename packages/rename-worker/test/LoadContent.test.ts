import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { loadContent } from '../src/parts/LoadContent/LoadContent.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

test('loadContent - no word at cursor', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'EditorCommandGetWordAt.getWordAt') {
        return null
      }
      if (method === 'Editor.getPositionAtCursor') {
        return { rowIndex: 0, columnIndex: 0, x: 0, y: 0 }
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const state = createDefaultState()
  const result = await loadContent(state)
  expect(result).toBe(state)
})

test('loadContent - with word at cursor', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'EditorCommandGetWordAt.getWordAt') {
        return 'test'
      }
      if (method === 'Editor.getPositionAtCursor') {
        return { rowIndex: 0, columnIndex: 0, x: 100, y: 100 }
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const state = createDefaultState()
  const result = await loadContent(state)
  expect(result).toEqual({
    ...state,
    oldValue: 'test',
    version: 1,
    x: 100,
    y: 100,
    width: 0,
    height: 0,
    focused: true,
    selectionEnd: 4,
  })
})
