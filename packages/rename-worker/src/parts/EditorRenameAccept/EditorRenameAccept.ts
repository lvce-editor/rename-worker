import * as ExtensionHostRename from '../ExtensionHostRename/ExtensionHostRename.ts'
import * as GetOffsetAtCursor from '../GetOffsetAtCursor/GetOffsetAtCursor.ts'
import { getRenameChanges } from '../GetRenameChanges/GetRenameChanges.ts'
import * as GetRenameState from '../GetRenameState/GetRenameState.ts'
import * as RemoveEditorWidget from '../RemoveEditorWidget/RemoveEditorWidget.ts'
import * as WidgetId from '../WidgetId/WidgetId.ts'

export const accept = async (editor: any): Promise<any> => {
  const child = GetRenameState.getRenameState(editor)
  if (!child) {
    return editor
  }

  const { widgets } = editor
  const newWidgets = RemoveEditorWidget.removeEditorWidget(widgets, WidgetId.Rename)
  // TODO
  const offset = GetOffsetAtCursor.getOffsetAtCursor(editor)

  const result = await ExtensionHostRename.executeRenameProvider(editor, offset, child.newValue)
  // @ts-ignore
  const changes = getRenameChanges(editor, result)
  // 1. ask extension host for rename edits
  // 2. apply rename edit across editor (and whole workspace)
  // 3. close rename widget
  return {
    ...editor,
    focused: true,
    widgets: newWidgets,
  }
}
