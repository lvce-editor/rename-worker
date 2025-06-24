import { test, expect, jest } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.ts'
import { sendMessagePortToExtensionHostWorker } from '../src/parts/SendMessagePortToExtensionHostWorker/SendMessagePortToExtensionHostWorker.ts'

test('sendMessagePortToExtensionHostWorker - calls invokeAndTransfer with correct parameters', async () => {
  const mockInvokeAndTransferFn = jest.fn()
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: () => {},
    invokeAndTransfer: mockInvokeAndTransferFn,
  })
  EditorWorker.set(mockRpc)

  const port = new MessageChannel().port1
  await sendMessagePortToExtensionHostWorker(port)

  expect(mockInvokeAndTransferFn).toHaveBeenCalledWith(
    'SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker',
    port,
    'HandleMessagePort.handleMessagePort2',
    0,
  )
})

test('sendMessagePortToExtensionHostWorker - function exists', () => {
  expect(typeof sendMessagePortToExtensionHostWorker).toBe('function')
})
