import { test, expect } from '@jest/globals'
import * as ApplyRender from '../src/parts/ApplyRender/ApplyRender.js'
import * as DiffType from '../src/parts/DiffType/DiffType.js'

const makeRenameState = (uid: number): any => ({
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
})

test('applyRender returns empty array for empty diffResult', () => {
  const oldState = makeRenameState(1)
  const newState = makeRenameState(2)
  const diffResult: number[] = []
  const result = ApplyRender.applyRender(oldState, newState, diffResult)
  expect(result).toEqual([])
})

test('applyRender throws for unknown diff type', () => {
  const oldState = makeRenameState(1)
  const newState = makeRenameState(2)
  const diffResult: number[] = [999]
  expect(() => ApplyRender.applyRender(oldState, newState, diffResult)).toThrow('unknown renderer')
})

test('applyRender calls a real renderer for RenderContent', () => {
  const oldState = makeRenameState(1)
  const newState = makeRenameState(2)
  const diffResult: number[] = [DiffType.RenderContent]
  const result = ApplyRender.applyRender(oldState, newState, diffResult)
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(1)
})
