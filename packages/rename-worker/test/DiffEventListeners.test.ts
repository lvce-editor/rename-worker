import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import { isEqual } from '../src/parts/DiffEventListeners/DiffEventListeners.js'

test('isEqual returns true when version is the same', () => {
  const oldState = createDefaultState()
  const newState = createDefaultState()
  expect(isEqual(oldState, newState)).toBe(true)
})

test('isEqual returns false when version is different', () => {
  const oldState = createDefaultState()
  const newState = { ...createDefaultState(), version: 2 }
  expect(isEqual(oldState, newState)).toBe(false)
})
