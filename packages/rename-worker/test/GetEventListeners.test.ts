import { test, expect } from '@jest/globals'
import { getEventListeners } from '../src/parts/GetEventListeners/GetEventListeners.ts'

test('getEventListeners', () => {
  const result = getEventListeners(1, 2)
  expect(result).toBeDefined()
})
