import { test, expect } from '@jest/globals'
import { renderEventListeners } from '../src/parts/RenderEventListeners/RenderEventListeners.ts'

test('renderEventListeners', () => {
  const state = { uid: 1 } as any
  const result = renderEventListeners(state)
  expect(result[0]).toBe('Viewlet.registerEventListeners')
  expect(result[1]).toBe(1)
  expect(Array.isArray(result[2])).toBe(true)
})
