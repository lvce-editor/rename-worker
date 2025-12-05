import { test, expect } from '@jest/globals'
import { getRenamePosition } from '../src/parts/GetRenamePosition/GetRenamePosition.js'

test('getRenamePosition returns correct bounds', () => {
  const cursorX = 100
  const cursorY = 200
  const result = getRenamePosition(cursorX, cursorY)

  expect(result).toEqual({
    height: 80,
    renameX: 100,
    renameY: 210,
    width: 300,
  })
})
