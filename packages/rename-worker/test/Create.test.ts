import { test, expect } from '@jest/globals'
import * as Create from '../src/parts/Create/Create.js'

test('create returns correct state', () => {
  const state = Create.create(1, 10, 20, 30, 40, 2, '')
  expect(state).toBeDefined()
})
