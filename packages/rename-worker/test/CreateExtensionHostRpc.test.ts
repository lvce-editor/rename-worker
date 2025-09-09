import { test, expect } from '@jest/globals'
import * as CreateExtensionHostRpc from '../src/parts/CreateExtensionHostRpc/CreateExtensionHostRpc.ts'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.ts'

test('createExtensionHostRpc works with mock rpc', async () => {
  const mockRpc = EditorWorker.registerMockRpc({
    'FileSystem.readDirWithFileTypes': () => {
      return []
    },
    'SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker': () => {
      return undefined
    },
  })
  const rpc = await CreateExtensionHostRpc.createExtensionHostRpc()
  expect(rpc).toBeDefined()
  expect(mockRpc.invocations).toEqual([
    ['FileSystem.readDirWithFileTypes'],
    ['SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker', expect.any(MessagePort), 'HandleMessagePort.handleMessagePort2', 0],
  ])
  await rpc.dispose()
})

test('createExtensionHostRpc throws error when mock rpc throws', async () => {
  const mockRpc = EditorWorker.registerMockRpc({
    'FileSystem.readDirWithFileTypes': () => {
      throw new Error('Mock invoke error')
    },
    'SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker': () => {
      throw new Error('Mock invokeAndTransfer error')
    },
  })
  await expect(CreateExtensionHostRpc.createExtensionHostRpc()).rejects.toThrow('Failed to create extension host rpc')
  expect(mockRpc.invocations).toEqual([
    ['FileSystem.readDirWithFileTypes'],
  ])
})
