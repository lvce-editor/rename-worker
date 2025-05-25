import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import { renderContent } from '../src/parts/RenderContent/RenderContent.js'

test('renderContent', () => {
  const oldState = createDefaultState()
  const newState = createDefaultState()
  const result = renderContent(oldState, newState)
  expect(result).toEqual(['Viewlet.setDom2', newState.uid, expect.anything()])
})
