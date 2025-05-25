import { test, expect } from '@jest/globals'
import { renderValue } from '../src/parts/RenderValue/RenderValue.js'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import * as InputName from '../src/parts/InputName/InputName.js'

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
