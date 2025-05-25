import { test, expect } from '@jest/globals'
import type { RenameState } from '../src/parts/RenameState/RenameState.js'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import { isEqual } from '../src/parts/DiffFocus/DiffFocus.js'

test('isEqual returns true when focus states are equal', () => {
  const state1: RenameState = createDefaultState()
  const state2: RenameState = createDefaultState()
  expect(isEqual(state1, state2)).toBe(true)
})

test('isEqual returns false when focus states are different', () => {
  const state1: RenameState = createDefaultState()
  const state2: RenameState = { ...createDefaultState(), focused: true }
  expect(isEqual(state1, state2)).toBe(false)
})
