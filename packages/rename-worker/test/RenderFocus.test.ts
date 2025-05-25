import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import { renderFocus } from '../src/parts/RenderFocus/RenderFocus.js'

test('renderFocus returns correct command', () => {
  const oldState = createDefaultState()
  const newState = { ...createDefaultState(), uid: 123 }

  const result = renderFocus(oldState, newState)

  expect(result).toEqual(['Viewlet.focusSelector', 123, '.RenameInputBox'])
})
