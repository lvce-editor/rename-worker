import type { RenameState } from '../RenameState/RenameState.ts'
import * as EditorWorker from '../EditorWorker/EditorWorker.ts'
import * as WidgetId from '../WidgetId/WidgetId.ts'

export const close = async (state: RenameState): Promise<RenameState> => {
  const { parentUid } = state
  await EditorWorker.closeWidget(parentUid, WidgetId.Rename, 'Rename', 0)
  return state
}
