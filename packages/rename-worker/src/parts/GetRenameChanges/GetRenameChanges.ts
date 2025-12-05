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
    const selection = { end, start }
    changes.push({
      // @ts-ignore
      deleted: TextDocument.getSelectionText(editor, selection),
      end,
      inserted: [result.inserted],
      origin: EditOrigin.Rename,
      start,
    })
  }
  return changes
}
