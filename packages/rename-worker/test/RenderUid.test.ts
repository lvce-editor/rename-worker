import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderMethod from '../src/parts/RenderMethod/RenderMethod.ts'
import * as RenderUid from '../src/parts/RenderUid/RenderUid.ts'

test('renderUid routes input events to the parent editor', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    parentUid: 456,
    uid: 123,
  }

  expect(RenderUid.renderUid(oldState, newState)).toEqual([RenderMethod.SetUid, 123, 456])
})
