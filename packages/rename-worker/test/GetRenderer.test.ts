import { test, expect } from '@jest/globals'
import * as DiffType from '../src/parts/DiffType/DiffType.js'
import { getRenderer } from '../src/parts/GetRenderer/GetRenderer.js'
import * as RenderBounds from '../src/parts/RenderBounds/RenderBounds.js'
import * as RenderContent from '../src/parts/RenderContent/RenderContent.js'
import * as RenderEventListeners from '../src/parts/RenderEventListeners/RenderEventListeners.js'
import * as RenderFocus from '../src/parts/RenderFocus/RenderFocus.js'
import * as RenderFocusContext from '../src/parts/RenderFocusContext/RenderFocusContext.js'
import * as RenderSelection from '../src/parts/RenderSelection/RenderSelection.js'
import * as RenderValue from '../src/parts/RenderValue/RenderValue.js'

test('getRenderer returns correct renderer for RenderContent', () => {
  expect(getRenderer(DiffType.RenderContent)).toBe(RenderContent.renderContent)
})

test('getRenderer returns correct renderer for RenderBounds', () => {
  expect(getRenderer(DiffType.RenderBounds)).toBe(RenderBounds.renderBounds)
})

test('getRenderer returns correct renderer for RenderEventListeners', () => {
  expect(getRenderer(DiffType.RenderEventListeners)).toBe(RenderEventListeners.renderEventListeners)
})

test('getRenderer returns correct renderer for RenderFocus', () => {
  expect(getRenderer(DiffType.RenderFocus)).toBe(RenderFocus.renderFocus)
})

test('getRenderer returns correct renderer for RenderValue', () => {
  expect(getRenderer(DiffType.RenderValue)).toBe(RenderValue.renderValue)
})

test('getRenderer returns correct renderer for RenderSelection', () => {
  expect(getRenderer(DiffType.RenderSelection)).toBe(RenderSelection.renderSelection)
})

test('getRenderer returns correct renderer for RenderFocusContext', () => {
  expect(getRenderer(DiffType.RenderFocusContext)).toBe(RenderFocusContext.renderFocusContext)
})

test('getRenderer throws error for unknown renderer', () => {
  expect(() => getRenderer(999)).toThrow('unknown renderer')
})
