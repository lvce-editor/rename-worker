export interface RenameBounds {
  readonly height: number
  readonly renameX: number
  readonly renameY: number
  readonly width: number
}

export const getRenamePosition = (cursorX: number, cursorY: number): RenameBounds => {
  const width = 300
  const height = 80
  const paddingTop = 10
  const renameY = cursorY + paddingTop
  return {
    height,
    renameX: cursorX,
    renameY,
    width,
  }
}
