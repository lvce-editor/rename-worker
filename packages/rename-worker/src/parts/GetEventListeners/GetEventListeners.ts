import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const getEventListeners = (): readonly DomEventListener[] => {
  return [
    {
      name: DomEventListenerFunctions.HandleBlur,
      params: ['EditorRename.handleBlur'],
    },
    {
      name: DomEventListenerFunctions.HandleInput,
      params: ['EditorRename.handleInput', 'event.target.value'],
    },
  ]
}
