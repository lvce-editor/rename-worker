import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import * as InputName from '../src/parts/InputName/InputName.js'
import { renderValue } from '../src/parts/RenderValue/RenderValue.js'

test('renderValue returns correct command', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    uid: 123,
    oldValue: 'test-value',
  }

  const result = renderValue(oldState, newState)

  expect(result).toEqual(['Viewlet.setValueByName', 123, InputName.Rename, 'test-value'])
})
