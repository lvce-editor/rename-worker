import type { RenameState } from '../RenameState/RenameState.ts'
import * as EditorWorker from '../EditorWorker/EditorWorker.ts'
import * as WidgetId from '../WidgetId/WidgetId.ts'

export const close = async (state: RenameState): Promise<RenameState> => {
  const { parentUid } = state
  // @ts-ignore
  await EditorWorker.invoke('Editor.closeWidget2', parentUid, WidgetId.Rename, 'Rename')
  return state
}
