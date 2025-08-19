import { getEventListeners } from '../GetEventListeners/GetEventListeners.ts'
import type { RenameState } from '../RenameState/RenameState.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderEventListeners = (state: RenameState): readonly any[] => {
  const { uid } = state
  const eventListeners = getEventListeners()
  return [RenderMethod.SetEventListeners, uid, eventListeners]
}
