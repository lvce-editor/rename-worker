import { test, expect } from '@jest/globals'
import { close } from '../src/parts/Close/Close.ts'
import { EditorWorker } from '@lvce-editor/rpc-registry'

test('close', async () => {
  const mockRpc = EditorWorker.registerMockRpc({
    'Editor.closeWidget2': () => {
      return undefined
    },
  })

  const state = { parentUid: 1 } as any
  const result = await close(state)
  expect(mockRpc.invocations).toEqual([['Editor.closeWidget2', 1, expect.any(Number), 'Rename', 0]])
  expect(result).toBe(state)
})
