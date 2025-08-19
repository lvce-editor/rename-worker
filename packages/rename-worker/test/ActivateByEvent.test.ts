import { test, expect, jest } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { activateByEvent } from '../src/parts/ActivateByEvent/ActivateByEvent.ts'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.ts'

test.skip('activateByEvent', async () => {
  const mockInvokeFn = jest.fn()
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: mockInvokeFn,
  })
  EditorWorker.set(mockRpc)

  await activateByEvent('event')
  expect(mockInvokeFn).toHaveBeenCalledWith('ExtensionHostManagement.activateByEvent', 'event')
})
