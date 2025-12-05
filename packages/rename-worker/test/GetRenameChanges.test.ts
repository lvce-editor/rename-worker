import { test, expect } from '@jest/globals'
import { getRenameChanges } from '../src/parts/GetRenameChanges/GetRenameChanges.ts'

test('getRenameChanges - no edits', () => {
  const editor = {}
  const result = getRenameChanges(editor, {})
  expect(result).toEqual([])
})

test('getRenameChanges - with edits', () => {
  const editor = { lines: ['test line'] }
  const result = getRenameChanges(editor, { edits: [{ deleted: 3, offset: 0 }], inserted: 'new' })
  expect(Array.isArray(result)).toBe(true)
})
