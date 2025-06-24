import { test, expect } from '@jest/globals'
import * as DiffType from '../src/parts/DiffType/DiffType.js'
import * as GetRenderer from '../src/parts/GetRenderer/GetRenderer.js'
import * as RenderBounds from '../src/parts/RenderBounds/RenderBounds.js'
import * as RenderContent from '../src/parts/RenderContent/RenderContent.js'
import * as RenderEventListeners from '../src/parts/RenderEventListeners/RenderEventListeners.js'
import * as RenderFocus from '../src/parts/RenderFocus/RenderFocus.js'
import * as RenderFocusContext from '../src/parts/RenderFocusContext/RenderFocusContext.js'
import * as RenderSelection from '../src/parts/RenderSelection/RenderSelection.js'
import * as RenderValue from '../src/parts/RenderValue/RenderValue.js'

test('getRenderer returns RenderContent.renderContent for RenderContent', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderContent)
  expect(renderer).toBe(RenderContent.renderContent)
})

test('getRenderer returns RenderBounds.renderBounds for RenderBounds', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderBounds)
  expect(renderer).toBe(RenderBounds.renderBounds)
})

test('getRenderer returns RenderEventListeners.renderEventListeners for RenderEventListeners', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderEventListeners)
  expect(renderer).toBe(RenderEventListeners.renderEventListeners)
})

test('getRenderer returns RenderFocus.renderFocus for RenderFocus', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderFocus)
  expect(renderer).toBe(RenderFocus.renderFocus)
})

test('getRenderer returns RenderValue.renderValue for RenderValue', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderValue)
  expect(renderer).toBe(RenderValue.renderValue)
})

test('getRenderer returns RenderSelection.renderSelection for RenderSelection', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderSelection)
  expect(renderer).toBe(RenderSelection.renderSelection)
})

test('getRenderer returns RenderFocusContext.renderFocusContext for RenderFocusContext', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderFocusContext)
  expect(renderer).toBe(RenderFocusContext.renderFocusContext)
})

test('getRenderer throws error for unknown diff type', () => {
  expect(() => GetRenderer.getRenderer(999)).toThrow('unknown renderer')
})

test('getRenderer throws error for negative diff type', () => {
  expect(() => GetRenderer.getRenderer(-1)).toThrow('unknown renderer')
})

test('getRenderer throws error for zero diff type', () => {
  expect(() => GetRenderer.getRenderer(0)).toThrow('unknown renderer')
})
