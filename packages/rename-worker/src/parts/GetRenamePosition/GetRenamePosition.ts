export const getRenamePosition = (cursorX: number, cursorY: number): any => {
  const width = 300
  const height = 30
  const paddingTop = 10
  const renameY = cursorY + paddingTop
  return {
    y: renameY,
    x: cursorX,
    width,
    height,
  }
}
