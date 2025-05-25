import { test, expect } from '@jest/globals'
import * as CommandIds from '../src/parts/CommandIds/CommandIds.js'
import { getCommandIds } from '../src/parts/GetCommandIds/GetCommandIds.js'

test('getCommandIds returns commandIds array', () => {
  const result = getCommandIds()
  expect(result).toBe(CommandIds.commandIds)
})
