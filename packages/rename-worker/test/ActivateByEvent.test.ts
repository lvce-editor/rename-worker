import { test, expect } from '@jest/globals'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import { activateByEvent } from '../src/parts/ActivateByEvent/ActivateByEvent.ts'

test.skip('activateByEvent', async () => {
  const mockRpc = EditorWorker.registerMockRpc({
    'ExtensionHostManagement.activateByEvent': () => {
      return undefined
    },
  })
  await activateByEvent('event')
  expect(mockRpc.invocations).toEqual([['ExtensionHostManagement.activateByEvent', 'event']])
})
