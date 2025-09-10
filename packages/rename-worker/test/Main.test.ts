import { test, expect } from '@jest/globals'
import { mockWorkerGlobalRpc } from '@lvce-editor/rpc'
import { main } from '../src/parts/Main/Main.ts'

test('main', async () => {
  const { start, dispose } = mockWorkerGlobalRpc()
  const mainPromise = main()
  start()
  await expect(mainPromise).resolves.toBeUndefined()
  dispose()
})
