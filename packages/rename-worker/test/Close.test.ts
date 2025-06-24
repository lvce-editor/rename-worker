import { test, expect, jest } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { close } from '../src/parts/Close/Close.ts'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.ts'

test('close', async () => {
  const mockInvokeFn = jest.fn()
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: mockInvokeFn,
  })
  EditorWorker.set(mockRpc)

  const state = { parentUid: 1 } as any
  const result = await close(state)
  expect(mockInvokeFn).toHaveBeenCalledWith('Editor.closeWidget2', 1, expect.anything(), 'Rename')
  expect(result).toBe(state)
})
