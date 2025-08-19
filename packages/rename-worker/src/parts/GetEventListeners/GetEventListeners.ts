import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const getEventListeners = (uid: number, widgetId: number): readonly DomEventListener[] => {
  return [
    {
      name: DomEventListenerFunctions.HandleBlur,
      params: ['executeWidgetCommand', 'Rename', 'Rename.handleBlur', uid, widgetId],
    },
    {
      name: DomEventListenerFunctions.HandleInput,
      params: ['executeWidgetCommand', 'Rename', 'Rename.handleInput', uid, widgetId, 'event.target.value'],
    },
  ]
}
