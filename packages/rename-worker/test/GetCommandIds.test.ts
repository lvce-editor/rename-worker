import { test, expect } from '@jest/globals'
import { getCommandIds } from '../src/parts/GetCommandIds/GetCommandIds.js'
import * as CommandIds from '../src/parts/CommandIds/CommandIds.js'

test('getCommandIds returns commandIds array', () => {
  const result = getCommandIds()
  expect(result).toBe(CommandIds.commandIds)
})
