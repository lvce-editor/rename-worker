import { test, expect } from '@jest/globals'
import * as GetOffsetAtCursor from '../src/parts/GetOffsetAtCursor/GetOffsetAtCursor.js'

test('getOffsetAtCursor returns correct offset for single line', () => {
  const editor = {
    lines: ['hello world'],
    selections: [0, 5],
  }
  const result = GetOffsetAtCursor.getOffsetAtCursor(editor)
  expect(result).toBe(5)
})

test('getOffsetAtCursor returns correct offset for multi-line', () => {
  const editor = {
    lines: ['hello', 'world'],
    selections: [1, 2],
  }
  const result = GetOffsetAtCursor.getOffsetAtCursor(editor)
  expect(result).toBe(8) // 5 (hello) + 1 (newline) + 2
})

test('getOffsetAtCursor returns 0 for empty selection', () => {
  const editor = {
    lines: ['abc'],
    selections: [0, 0],
  }
  const result = GetOffsetAtCursor.getOffsetAtCursor(editor)
  expect(result).toBe(0)
})
