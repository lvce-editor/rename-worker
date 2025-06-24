import { test, expect } from '@jest/globals'
import * as Create from '../src/parts/Create/Create.js'

test('create returns correct state', () => {
  const state = Create.create(1, 10, 20, 30, 40, 2)
  expect(state).toMatchObject({
    uid: 1,
    x: 10,
    y: 20,
    width: 30,
    height: 40,
    parentUid: 2,
    focused: false,
    focusedIndex: 0,
    newValue: '',
    oldValue: '',
    version: 0,
    selectionEnd: 0,
    selectionStart: 0,
  })
})

test('create throws if uid is not a number', () => {
  // @ts-expect-error
  expect(() => Create.create('a', 10, 20, 30, 40, 2)).toThrow()
})
