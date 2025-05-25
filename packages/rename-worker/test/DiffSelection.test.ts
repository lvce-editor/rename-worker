import { test, expect } from '@jest/globals'
import type { RenameState } from '../src/parts/RenameState/RenameState.js'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import { isEqual } from '../src/parts/DiffSelection/DiffSelection.js'

test('isEqual returns true when selection states are equal', () => {
  const state1: RenameState = createDefaultState()
  const state2: RenameState = createDefaultState()
  expect(isEqual(state1, state2)).toBe(true)
})

test('isEqual returns false when selectionStart is different', () => {
  const state1: RenameState = createDefaultState()
  const state2: RenameState = { ...createDefaultState(), selectionStart: 5 }
  expect(isEqual(state1, state2)).toBe(false)
})

test('isEqual returns false when selectionEnd is different', () => {
  const state1: RenameState = createDefaultState()
  const state2: RenameState = { ...createDefaultState(), selectionEnd: 10 }
  expect(isEqual(state1, state2)).toBe(false)
})
