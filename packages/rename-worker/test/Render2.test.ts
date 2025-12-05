import { test, expect } from '@jest/globals'
import * as DiffType from '../src/parts/DiffType/DiffType.js'
import * as RenameStates from '../src/parts/RenameStates/RenameStates.js'
import * as Render2 from '../src/parts/Render2/Render2.js'

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

test('render2 returns commands from ApplyRender', () => {
  const uid = 1
  const oldState = makeRenameState(uid)
  const newState = makeRenameState(uid + 1)
  RenameStates.set(uid, oldState, newState)
  const diffResult = [DiffType.RenderContent]
  const result = Render2.render2(uid, diffResult)
  expect(Array.isArray(result)).toBe(true)
})

test('render2 returns empty array for empty diffResult', () => {
  const uid = 2
  const oldState = makeRenameState(uid)
  const newState = makeRenameState(uid + 1)
  RenameStates.set(uid, oldState, newState)
  const diffResult: number[] = []
  const result = Render2.render2(uid, diffResult)
  expect(result).toEqual([])
})
