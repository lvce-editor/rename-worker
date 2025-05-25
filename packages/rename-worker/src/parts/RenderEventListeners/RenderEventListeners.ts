import type { RenameState } from '../RenameState/RenameState.ts'
import { getEventListeners } from '../GetEventListeners/GetEventListeners.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'
import * as WidgetId from '../WidgetId/WidgetId.ts'

export const renderEventListeners = (state: RenameState): readonly any[] => {
  const { uid } = state
  const eventListeners = getEventListeners(uid, WidgetId.ColorPicker)
  return [RenderMethod.SetEventListeners, uid, eventListeners]
}
