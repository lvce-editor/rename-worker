import { test, expect } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.js'
import * as ExtensionHostWorker from '../src/parts/ExtensionHostWorker/ExtensionHostWorker.js'

test('invoke calls EditorWorker.invoke with correct args', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...params: readonly any[]) => {
      if (method === 'ExtensionHostWorker.invoke') {
        return { method, params }
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  EditorWorker.set(mockRpc)

  const result = await ExtensionHostWorker.invoke('doSomething', 1, 2, 3)
  expect(result.method).toBe('ExtensionHostWorker.invoke')
  expect(result.params).toEqual(['doSomething', 1, 2, 3])
})

test('set exists', () => {
  expect(typeof ExtensionHostWorker.set).toBe('function')
})
