import { test, expect } from '@jest/globals'
import * as Diff from '../src/parts/Diff/Diff.js'

const makeRenameState = (uid: number, overrides: any = {}): any => ({
  focused: false,
  focusedIndex: 0,
  height: 0,
  newValue: '',
  oldValue: '',
  parentUid: 0,
  selectionEnd: 0,
  selectionStart: 0,
  uid,
  version: 1,
  width: 0,
  x: 0,
  y: 0,
  ...overrides,
})

test('diff returns empty array when states are identical', () => {
  const state = makeRenameState(1)
  const result = Diff.diff(state, state)
  expect(result).toEqual([])
})

test('diff returns numbers when states have different content', () => {
  const oldState = makeRenameState(1, { newValue: 'old', oldValue: 'old' })
  const newState = makeRenameState(1, { newValue: 'new', oldValue: 'new' })
  const result = Diff.diff(oldState, newState)
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBeGreaterThan(0)
})

test('diff returns numbers when states have different bounds', () => {
  const oldState = makeRenameState(1, { height: 50, width: 100, x: 0, y: 0 })
  const newState = makeRenameState(1, { height: 100, width: 200, x: 10, y: 20 })
  const result = Diff.diff(oldState, newState)
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBeGreaterThan(0)
})

test('diff returns numbers when states have different focus', () => {
  const oldState = makeRenameState(1, { focused: false, focusedIndex: 0 })
  const newState = makeRenameState(1, { focused: true, focusedIndex: 1 })
  const result = Diff.diff(oldState, newState)
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBeGreaterThan(0)
})

test('diff returns numbers when states have different selection', () => {
  const oldState = makeRenameState(1, { selectionEnd: 0, selectionStart: 0 })
  const newState = makeRenameState(1, { selectionEnd: 10, selectionStart: 5 })
  const result = Diff.diff(oldState, newState)
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBeGreaterThan(0)
})
