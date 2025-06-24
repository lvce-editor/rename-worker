import { test, expect } from '@jest/globals'
import { getPortTuple } from '../src/parts/GetPortTuple/GetPortTuple.ts'

test('getPortTuple', () => {
  const result = getPortTuple()
  expect(result).toHaveProperty('port1')
  expect(result).toHaveProperty('port2')
  expect(result.port1).not.toBe(result.port2)
})
