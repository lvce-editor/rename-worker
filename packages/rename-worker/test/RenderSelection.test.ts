import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import * as InputName from '../src/parts/InputName/InputName.js'
import { renderSelection } from '../src/parts/RenderSelection/RenderSelection.js'

test('renderSelection returns correct command', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    selectionEnd: 10,
    selectionStart: 5,
    uid: 123,
  }

  const result = renderSelection(oldState, newState)

  expect(result).toEqual(['Viewlet.setSelectionByName', 123, InputName.Rename, 5, 10])
})
