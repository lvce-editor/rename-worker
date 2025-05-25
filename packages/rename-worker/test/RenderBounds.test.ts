import { test, expect } from '@jest/globals'
import { renderBounds } from '../src/parts/RenderBounds/RenderBounds.js'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import * as RenderMethod from '../src/parts/RenderMethod/RenderMethod.js'

test('renderBounds returns correct command', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    uid: 123,
    x: 100,
    y: 200,
    width: 300,
    height: 400,
  }

  const result = renderBounds(oldState, newState)

  expect(result).toEqual([RenderMethod.SetBounds, 123, 100, 200, 300, 400])
})
