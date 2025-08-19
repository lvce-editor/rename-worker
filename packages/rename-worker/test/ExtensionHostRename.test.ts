import { test, expect } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.js'
import * as ExtensionHostRename from '../src/parts/ExtensionHostRename/ExtensionHostRename.js'
import * as ExtensionHostWorker from '../src/parts/ExtensionHostWorker/ExtensionHostWorker.js'

test.skip('executeRenameProvider calls ExtensionHostEditor.execute with correct args', async () => {
  let lastArgs: any = null
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return undefined
      }
      if (method === 'ExtensionHostWorker.invoke') {
        // This is called by ExtensionHostEditor.execute
        lastArgs = { method: args[0], uid: args[1], args: args.slice(2) }
        return 'executed'
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHostWorker.set(mockRpc)
  EditorWorker.set(mockRpc)

  const editor = { languageId: 'js' }
  const offset = 42
  const newName = 'fooBar'
  const result = await ExtensionHostRename.executeRenameProvider(editor, offset, newName)
  expect(result).toBe('executed')
  expect(lastArgs.method).toBeDefined()
  expect(lastArgs.uid).toBe(123)
  expect(lastArgs.args).toEqual([offset, newName])
})
