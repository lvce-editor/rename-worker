import { test, expect } from '@jest/globals'
import { dispose } from '../src/parts/Dispose/Dispose.ts'

test('dispose', () => {
  // This test just verifies the function doesn't throw
  expect(() => dispose(123)).not.toThrow()
})
