import { test, expect } from '@jest/globals'
import * as Diff from '../src/parts/Diff/Diff.js'

const makeRenameState = (uid: number, overrides: any = {}): any => ({
  uid,
  focusedIndex: 0,
  focused: false,
  oldValue: '',
  newValue: '',
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  version: 1,
  parentUid: 0,
  selectionStart: 0,
  selectionEnd: 0,
  ...overrides,
})

test('diff returns empty array when states are identical', () => {
  const state = makeRenameState(1)
  const result = Diff.diff(state, state)
  expect(result).toEqual([])
})

test('diff returns numbers when states have different content', () => {
  const oldState = makeRenameState(1, { oldValue: 'old', newValue: 'old' })
  const newState = makeRenameState(1, { oldValue: 'new', newValue: 'new' })
  const result = Diff.diff(oldState, newState)
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBeGreaterThan(0)
})

test('diff returns numbers when states have different bounds', () => {
  const oldState = makeRenameState(1, { x: 0, y: 0, width: 100, height: 50 })
  const newState = makeRenameState(1, { x: 10, y: 20, width: 200, height: 100 })
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
  const oldState = makeRenameState(1, { selectionStart: 0, selectionEnd: 0 })
  const newState = makeRenameState(1, { selectionStart: 5, selectionEnd: 10 })
  const result = Diff.diff(oldState, newState)
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBeGreaterThan(0)
})
