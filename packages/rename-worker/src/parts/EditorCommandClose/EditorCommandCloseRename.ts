import * as RemoveEditorWidget from '../RemoveEditorWidget/RemoveEditorWidget.ts'
import * as WidgetId from '../WidgetId/WidgetId.ts'

// TODO duplicate code
const isRenameWidget = (widget: any): boolean => {
  return widget.id === WidgetId.Rename
}

export const closeRename = (editor: any): Promise<any> => {
  // TODO ask editor worker to remove widget
  const { widgets } = editor
  const renameWidgetIndex = widgets.findIndex(isRenameWidget)
  if (renameWidgetIndex === -1) {
    return editor
  }
  const newWidgets = RemoveEditorWidget.removeEditorWidget(widgets, WidgetId.Rename)
  return {
    ...editor,
    focused: true,
    widgets: newWidgets,
  }
}
