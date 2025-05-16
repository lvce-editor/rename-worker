import * as ActivateByEvent from '../ActivateByEvent/ActivateByEvent.ts'
import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const execute = async ({ editor, args, event, method, noProviderFoundMessage, noProviderFoundResult = undefined }: any): Promise<any> => {
  const fullEvent = `${event}:${editor.languageId}`
  await ActivateByEvent.activateByEvent(fullEvent)
  const result = await RendererWorker.invoke('ExtensionHostWorker.invoke', method, editor.uid, ...args)
  return result
}
