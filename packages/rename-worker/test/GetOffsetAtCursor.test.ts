import { test, expect } from '@jest/globals'
import * as GetOffsetAtCursor from '../src/parts/GetOffsetAtCursor/GetOffsetAtCursor.js'

test.skip('getOffsetAtCursor returns correct offset for single line', () => {
  const editor = {
    lines: ['hello world'],
    selections: [0, 5],
  }
  // @ts-ignore
  const result = GetOffsetAtCursor.getOffsetAtCursor(editor)
  expect(result).toBe(5)
})
