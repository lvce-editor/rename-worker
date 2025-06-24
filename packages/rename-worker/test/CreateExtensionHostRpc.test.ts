import { test, expect } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import * as CreateExtensionHostRpc from '../src/parts/CreateExtensionHostRpc/CreateExtensionHostRpc.js'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.js'

test('createExtensionHostRpc works with mock rpc', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'FileSystem.readDirWithFileTypes') {
        return []
      }
      if (method === 'SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
    invokeAndTransfer: (method: string) => {
      if (method === 'FileSystem.readDirWithFileTypes') {
        return []
      }
      if (method === 'SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  EditorWorker.set(mockRpc)
  const rpc = await CreateExtensionHostRpc.createExtensionHostRpc()
  expect(rpc).toBeDefined()
  await rpc.dispose()
})

test('createExtensionHostRpc throws error when mock rpc throws', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      throw new Error('Mock invoke error')
    },
    invokeAndTransfer: (method: string) => {
      throw new Error('Mock invokeAndTransfer error')
    },
  })
  EditorWorker.set(mockRpc)
  await expect(CreateExtensionHostRpc.createExtensionHostRpc()).rejects.toThrow('Failed to create extension host rpc')
})
