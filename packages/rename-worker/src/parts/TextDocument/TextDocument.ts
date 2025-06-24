import * as Assert from '../Assert/Assert.ts'

export const offsetAt = (textDocument: any, positionRowIndex: number, positionColumnIndex: number): number => {
  Assert.object(textDocument)
  Assert.number(positionRowIndex)
  Assert.number(positionColumnIndex)
  let offset = 0
  let rowIndex = 0
  const { lines } = textDocument
  const max = Math.min(positionRowIndex, textDocument.lines.length)
  while (rowIndex < max) {
    offset += lines[rowIndex].length + 1
    rowIndex++
  }
  offset += positionColumnIndex
  return offset
}

export const positionAt = (textDocument: any, offset: number): any => {
  const { lines } = textDocument
  let rowIndex = 0
  let columnIndex = 0
  let currentOffset = 0

  while (rowIndex < lines.length && currentOffset < offset) {
    currentOffset += lines[rowIndex].length + 1
    rowIndex++
  }

  if (currentOffset > offset) {
    rowIndex--
    currentOffset -= lines[rowIndex].length + 1
    columnIndex = offset - currentOffset
  } else {
    columnIndex = currentOffset - offset
  }
  return {
    rowIndex,
    columnIndex,
  }
}

export const getSelectionText = (textDocument: any, selection: any): string => {
  const { lines } = textDocument
  const { start, end } = selection

  if (start.rowIndex === end.rowIndex) {
    // Same line selection
    const line = lines[start.rowIndex] || ''
    return line.substring(start.columnIndex, end.columnIndex)
  } else {
    // Multi-line selection
    let result = ''

    // First line
    const firstLine = lines[start.rowIndex] || ''
    result += firstLine.substring(start.columnIndex)

    // Middle lines
    for (let i = start.rowIndex + 1; i < end.rowIndex; i++) {
      result += '\n' + (lines[i] || '')
    }

    // Last line
    if (end.rowIndex < lines.length) {
      const lastLine = lines[end.rowIndex] || ''
      result += '\n' + lastLine.substring(0, end.columnIndex)
    }

    return result
  }
}
