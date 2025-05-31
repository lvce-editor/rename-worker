import * as EditorWorker from '../EditorWorker/EditorWorker.ts'

export const activateByEvent = async (event: any): Promise<void> => {
  // @ts-ignore
  await EditorWorker.invoke('ExtensionHostManagement.activateByEvent', event)
}
