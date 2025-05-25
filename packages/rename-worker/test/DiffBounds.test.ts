import { test, expect } from '@jest/globals'
import type { RenameState } from '../src/parts/RenameState/RenameState.js'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import { isEqual } from '../src/parts/DiffBounds/DiffBounds.js'

test('isEqual returns true when bounds are equal', () => {
  const state1: RenameState = createDefaultState()
  const state2: RenameState = createDefaultState()
  expect(isEqual(state1, state2)).toBe(true)
})

test('isEqual returns false when x is different', () => {
  const state1: RenameState = createDefaultState()
  const state2: RenameState = { ...createDefaultState(), x: 100 }
  expect(isEqual(state1, state2)).toBe(false)
})

test('isEqual returns false when y is different', () => {
  const state1: RenameState = createDefaultState()
  const state2: RenameState = { ...createDefaultState(), y: 100 }
  expect(isEqual(state1, state2)).toBe(false)
})

test('isEqual returns false when width is different', () => {
  const state1: RenameState = createDefaultState()
  const state2: RenameState = { ...createDefaultState(), width: 100 }
  expect(isEqual(state1, state2)).toBe(false)
})

test('isEqual returns false when height is different', () => {
  const state1: RenameState = createDefaultState()
  const state2: RenameState = { ...createDefaultState(), height: 100 }
  expect(isEqual(state1, state2)).toBe(false)
})
