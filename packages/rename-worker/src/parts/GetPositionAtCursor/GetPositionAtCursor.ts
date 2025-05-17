import type { PositionAtCursor } from '../PositionAtCursor/PositionAtCursor.ts'

export const getPositionAtCursor = (editor: any): PositionAtCursor => {
  // TODO ask editor worker
  return {
    x: 0,
    y: 0,
    rowIndex: 0,
    columnIndex: 0,
  }
}
