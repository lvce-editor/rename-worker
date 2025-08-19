import type { RenameState } from '../RenameState/RenameState.ts'

export const accept = async (state: RenameState): Promise<RenameState> => {
  // TODO ask editor worker to apply changes
  // const { widgets } = editor
  // const newWidgets = RemoveEditorWidget.removeEditorWidget(widgets, WidgetId.Rename)
  // TODO
  // const offset = GetOffsetAtCursor.getOffsetAtCursor(editor)

  // const result = await ExtensionHostRename.executeRenameProvider(editor, offset, child.newValue)
  // @ts-ignore
  // const changes = getRenameChanges(editor, result)
  // 1. ask extension host for rename edits
  // 2. apply rename edit across editor (and whole workspace)
  // 3. close rename widget
  return {
    ...state,
    focused: true,
    // widgets: newWidgets,
  }
}
