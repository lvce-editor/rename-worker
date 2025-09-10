import { test, expect } from '@jest/globals'
import { mockWorkerGlobalRpc } from '@lvce-editor/rpc'
import { listen } from '../src/parts/Listen/Listen.ts'

test('listen', async () => {
  const { start, dispose } = mockWorkerGlobalRpc()
  const listenPromise = listen()
  start()
  await expect(listenPromise).resolves.toBeUndefined()
  dispose()
})
