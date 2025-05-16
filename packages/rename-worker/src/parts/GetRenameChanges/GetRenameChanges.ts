import * as EditOrigin from '../EditOrigin/EditOrigin.ts'
import * as TextDocument from '../TextDocument/TextDocument.ts'

export const getRenameChanges = (editor: any, result: any): readonly any[] => {
  if (!result?.edits) {
    return []
  }
  const changes: any[] = []
  for (const edit of result.edits) {
    const position = TextDocument.positionAt(editor, edit.offset)
    const start = position
    const end = {
      ...position,
      columnIndex: start.columnIndex + edit.deleted,
    }
    const selection = { start, end }
    changes.push({
      start,
      end,
      inserted: [result.inserted],
      deleted: TextDocument.getSelectionText(editor, selection),
      origin: EditOrigin.Rename,
    })
  }
  return changes
}
