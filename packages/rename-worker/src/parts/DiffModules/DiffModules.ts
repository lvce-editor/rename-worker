import * as DiffBounds from '../DiffBounds/DiffBounds.ts'
import * as DiffContent from '../DiffContent/DiffContent.ts'
import * as DiffEventListeners from '../DiffEventListeners/DiffEventListeners.ts'
import * as DiffFocus from '../DiffFocus/DiffFocus.ts'
import * as DiffSelection from '../DiffSelection/DiffSelection.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as DiffValue from '../DiffValue/DiffValue.ts'

export const modules = [
  DiffContent.isEqual,
  DiffBounds.isEqual,
  DiffFocus.isEqual,
  DiffEventListeners.isEqual,
  DiffValue.isEqual,
  DiffSelection.isEqual,
]

export const numbers = [
  DiffType.RenderContent,
  DiffType.RenderBounds,
  DiffType.RenderFocus,
  DiffType.RenderEventListeners,
  DiffType.RenderValue,
  DiffType.RenderSelection,
]
