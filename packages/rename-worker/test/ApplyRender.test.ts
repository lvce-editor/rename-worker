import { test, expect } from '@jest/globals'
import * as ApplyRender from '../src/parts/ApplyRender/ApplyRender.js'
import * as DiffType from '../src/parts/DiffType/DiffType.js'

const makeRenameState = (uid: number): any => ({
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
})

test('applyRender returns empty array for empty diffResult', () => {
  const oldState = makeRenameState(1)
  const newState = makeRenameState(2)
  const diffResult: number[] = []
  const result = ApplyRender.applyRender(oldState, newState, diffResult)
  expect(result).toEqual([])
})

test('applyRender returns array with one command for single diffResult', () => {
  const oldState = makeRenameState(1)
  const newState = makeRenameState(2)
  const diffResult = [DiffType.RenderContent]
  const result = ApplyRender.applyRender(oldState, newState, diffResult)
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(1)
})

test('applyRender returns array with multiple commands for multiple diffResult', () => {
  const oldState = makeRenameState(1)
  const newState = makeRenameState(2)
  const diffResult = [DiffType.RenderContent, DiffType.RenderBounds]
  const result = ApplyRender.applyRender(oldState, newState, diffResult)
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(2)
})

test('applyRender throws for unknown diff type', () => {
  const oldState = makeRenameState(1)
  const newState = makeRenameState(2)
  const diffResult = [999]
  expect(() => ApplyRender.applyRender(oldState, newState, diffResult)).toThrow('unknown renderer')
})
