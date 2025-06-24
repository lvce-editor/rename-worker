import { test, expect } from '@jest/globals'
import { getEventListeners } from '../src/parts/GetEventListeners/GetEventListeners.ts'

test('getEventListeners', () => {
  const result = getEventListeners(1, 2)
  expect(result).toHaveLength(1)
  expect(result[0]).toHaveProperty('name')
  expect(result[0]).toHaveProperty('params')
  expect(Array.isArray(result[0].params)).toBe(true)
})
