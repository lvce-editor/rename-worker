import { test, expect } from '@jest/globals'
import { renderSelection } from '../src/parts/RenderSelection/RenderSelection.js'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import * as InputName from '../src/parts/InputName/InputName.js'

test('renderSelection returns correct command', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    uid: 123,
    selectionStart: 5,
    selectionEnd: 10,
  }

  const result = renderSelection(oldState, newState)

  expect(result).toEqual(['Viewlet.setSelectionByName', 123, InputName.Rename, 5, 10])
})
