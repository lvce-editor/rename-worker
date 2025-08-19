import * as EditorWorker from '../EditorWorker/EditorWorker.ts'

export const activateByEvent = async (event: any): Promise<void> => {
  await EditorWorker.activateByEvent(event)
}
