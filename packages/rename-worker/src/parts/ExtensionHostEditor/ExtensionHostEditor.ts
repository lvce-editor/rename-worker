import * as ActivateByEvent from '../ActivateByEvent/ActivateByEvent.ts'
import * as EditorWorker from '../EditorWorker/EditorWorker.ts'

export const execute = async ({ editor, args, event, method, noProviderFoundMessage, noProviderFoundResult = undefined }: any): Promise<any> => {
  const fullEvent = `${event}:${editor.languageId}`
  await ActivateByEvent.activateByEvent(fullEvent)
  // @ts-ignore
  const result = await EditorWorker.invoke('ExtensionHostWorker.invoke', method, editor.uid, ...args)
  return result
}
