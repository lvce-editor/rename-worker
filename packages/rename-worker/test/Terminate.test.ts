import { test, expect, jest } from '@jest/globals'
import { terminate } from '../src/parts/Terminate/Terminate.js'

test('terminate calls globalThis.close', () => {
  const mockClose = jest.fn()
  globalThis.close = mockClose

  terminate()

  expect(mockClose).toHaveBeenCalled()
})
