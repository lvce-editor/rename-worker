import type { Bounds } from '../Bounds/Bounds.ts'

export const getRenamePosition = (cursorX: number, cursorY: number): Bounds => {
  const width = 300
  const height = 80
  const paddingTop = 10
  const renameY = cursorY + paddingTop
  return {
    y: renameY,
    x: cursorX,
    width,
    height,
  }
}
