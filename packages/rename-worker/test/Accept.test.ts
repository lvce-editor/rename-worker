import { test, expect } from '@jest/globals'
import { accept } from '../src/parts/Accept/Accept.ts'

test('accept - no child', async () => {
  const editor = { widgets: [] }
  const result = await accept(editor)
  expect(result).toBe(editor)
})

test('accept - with child', async () => {
  const editor = { widgets: [{ id: 1, newState: { newValue: 'foo' } }] }
  // This test verifies the function doesn't throw
  await expect(accept(editor)).resolves.toBeDefined()
})
