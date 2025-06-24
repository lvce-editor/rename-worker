import { test, expect } from '@jest/globals'
import * as TextDocument from '../src/parts/TextDocument/TextDocument.ts'

test('offsetAt should calculate correct offset for single line', () => {
  const textDocument = {
    lines: ['hello world'],
  }
  const result = TextDocument.offsetAt(textDocument, 0, 5)
  expect(result).toBe(5)
})

test('offsetAt should calculate correct offset for multi-line document', () => {
  const textDocument = {
    lines: ['hello', 'world', 'test'],
  }
  const result = TextDocument.offsetAt(textDocument, 1, 2)
  expect(result).toBe(8) // 5 (hello) + 1 (newline) + 2 (wo)
})

test('offsetAt should handle position beyond document length', () => {
  const textDocument = {
    lines: ['hello', 'world'],
  }
  const result = TextDocument.offsetAt(textDocument, 5, 10)
  expect(result).toBe(22) // 5 (hello) + 1 (newline) + 5 (world) + 1 (newline) + 10 (column)
})

test('offsetAt should handle empty document', () => {
  const textDocument = {
    lines: [],
  }
  const result = TextDocument.offsetAt(textDocument, 0, 5)
  expect(result).toBe(5)
})

test('offsetAt should handle position at end of line', () => {
  const textDocument = {
    lines: ['hello', 'world'],
  }
  const result = TextDocument.offsetAt(textDocument, 0, 5)
  expect(result).toBe(5)
})

test('positionAt should calculate correct position for single line', () => {
  const textDocument = {
    lines: ['hello world'],
  }
  const result = TextDocument.positionAt(textDocument, 5)
  expect(result).toEqual({ rowIndex: 0, columnIndex: 5 })
})

test('positionAt should calculate correct position for multi-line document', () => {
  const textDocument = {
    lines: ['hello', 'world', 'test'],
  }
  const result = TextDocument.positionAt(textDocument, 8)
  expect(result).toEqual({ rowIndex: 1, columnIndex: 2 })
})

test('positionAt should handle offset at line boundary', () => {
  const textDocument = {
    lines: ['hello', 'world'],
  }
  const result = TextDocument.positionAt(textDocument, 6)
  expect(result).toEqual({ rowIndex: 1, columnIndex: 0 })
})

test('positionAt should handle offset beyond document length', () => {
  const textDocument = {
    lines: ['hello', 'world'],
  }
  const result = TextDocument.positionAt(textDocument, 20)
  expect(result).toEqual({ rowIndex: 2, columnIndex: -8 })
})

test('positionAt should handle empty document', () => {
  const textDocument = {
    lines: [],
  }
  const result = TextDocument.positionAt(textDocument, 5)
  expect(result).toEqual({ rowIndex: 0, columnIndex: -5 })
})

test('positionAt should handle offset at end of document', () => {
  const textDocument = {
    lines: ['hello', 'world'],
  }
  const result = TextDocument.positionAt(textDocument, 12)
  expect(result).toEqual({ rowIndex: 2, columnIndex: 0 })
})

test('positionAt should handle offset in middle of line', () => {
  const textDocument = {
    lines: ['hello world', 'test example'],
  }
  const result = TextDocument.positionAt(textDocument, 7)
  expect(result).toEqual({ rowIndex: 0, columnIndex: 7 })
})

test('positionAt should handle offset at start of second line', () => {
  const textDocument = {
    lines: ['hello', 'world'],
  }
  const result = TextDocument.positionAt(textDocument, 6)
  expect(result).toEqual({ rowIndex: 1, columnIndex: 0 })
})

test('getSelectionText: start.rowIndex out of bounds', () => {
  const textDocument = { lines: ['abc', 'def'] }
  const selection = { start: { rowIndex: 5, columnIndex: 1 }, end: { rowIndex: 5, columnIndex: 2 } }
  const result = TextDocument.getSelectionText(textDocument, selection)
  expect(result).toBe('')
})

test('getSelectionText: negative start.columnIndex', () => {
  const textDocument = { lines: ['abcdef'] }
  const selection = { start: { rowIndex: 0, columnIndex: -2 }, end: { rowIndex: 0, columnIndex: 3 } }
  const result = TextDocument.getSelectionText(textDocument, selection)
  expect(result).toBe('')
})

test('getSelectionText: negative end.columnIndex on last line', () => {
  const textDocument = { lines: ['abc', 'def', 'ghi'] }
  const selection = { start: { rowIndex: 1, columnIndex: 1 }, end: { rowIndex: 2, columnIndex: -2 } }
  const result = TextDocument.getSelectionText(textDocument, selection)
  expect(result).toBe('ef\n')
})

test('getSelectionText: end.columnIndex out of bounds on last line', () => {
  const textDocument = { lines: ['abc', 'def', 'ghi'] }
  const selection = { start: { rowIndex: 1, columnIndex: 1 }, end: { rowIndex: 2, columnIndex: 99 } }
  const result = TextDocument.getSelectionText(textDocument, selection)
  expect(result).toBe('ef\nghi')
})

test('getSelectionText: multi-line selection with end.rowIndex out of bounds', () => {
  const textDocument = { lines: ['abc', 'def'] }
  const selection = { start: { rowIndex: 0, columnIndex: 1 }, end: { rowIndex: 5, columnIndex: 2 } }
  const result = TextDocument.getSelectionText(textDocument, selection)
  expect(result).toBe('bc\ndef\n\n\n')
})
