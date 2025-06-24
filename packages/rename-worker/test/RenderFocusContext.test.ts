import { test, expect } from '@jest/globals'
import { renderFocusContext } from '../src/parts/RenderFocusContext/RenderFocusContext.ts'

test('renderFocusContext', () => {
  const oldState = {} as any
  const newState = {} as any
  const result = renderFocusContext(oldState, newState)
  expect(result).toEqual(['Viewlet.setFocusContext', expect.anything()])
})
