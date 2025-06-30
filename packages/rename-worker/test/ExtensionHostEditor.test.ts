import { test, expect } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.js'
import * as ExtensionHostEditor from '../src/parts/ExtensionHostEditor/ExtensionHostEditor.js'
import * as ExtensionHostWorker from '../src/parts/ExtensionHostWorker/ExtensionHostWorker.js'

test('execute activates event and calls ExtensionHostWorker.invoke', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return undefined
      }
      if (method === 'ExtensionHostWorker.invoke') {
        return { method: args[0], uid: args[1], args: args.slice(2) }
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHostWorker.set(mockRpc)
  EditorWorker.set(mockRpc)

  const editor = { languageId: 'js' }
  const result = await ExtensionHostEditor.execute({
    editor,
    args: [1, 2],
    event: 'onTest',
    method: 'doSomething',
  })
  expect(result.method).toBe('doSomething')
  expect(result.uid).toBe(123)
  expect(result.args).toEqual([1, 2])
})
