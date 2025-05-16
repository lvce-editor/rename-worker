import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

// TODO add tests for this
export const activateByEvent = async (event: any): Promise<void> => {
  await RendererWorker.invoke('ExtensionHostManagement.activateByEvent', event)
}
