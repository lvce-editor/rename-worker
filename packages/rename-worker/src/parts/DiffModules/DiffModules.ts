import * as DiffBounds from '../DiffBounds/DiffBounds.ts'
import * as DiffContent from '../DiffContent/DiffContent.ts'
import * as DiffEventListeners from '../DiffEventListeners/DiffEventListeners.ts'
import * as DiffFocus from '../DiffFocus/DiffFocus.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const modules = [DiffContent.isEqual, DiffBounds.isEqual, DiffFocus.isEqual, DiffEventListeners.isEqual]

export const numbers = [DiffType.RenderContent, DiffType.RenderBounds, DiffType.RenderFocus, DiffType.RenderEventListeners]
