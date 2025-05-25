import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import { isEqual } from '../src/parts/DiffValue/DiffValue.js'

test('isEqual returns true when oldValue is the same', () => {
  const oldState = createDefaultState()
  const newState = createDefaultState()
  expect(isEqual(oldState, newState)).toBe(true)
})

test('isEqual returns false when oldValue is different', () => {
  const oldState = createDefaultState()
  const newState = { ...createDefaultState(), oldValue: 'different' }
  expect(isEqual(oldState, newState)).toBe(false)
})
