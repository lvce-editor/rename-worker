import * as EditorWorker from '../EditorWorker/EditorWorker.ts'

export const activateByEvent = async (event: string): Promise<void> => {
  await EditorWorker.activateByEvent(event)
}
