import * as ActivateByEvent from '../ActivateByEvent/ActivateByEvent.ts'
import * as ExtensionHostWorker from '../ExtensionHostWorker/ExtensionHostWorker.ts'

export const execute = async ({ editor, args, event, method, noProviderFoundMessage, noProviderFoundResult = undefined }: any): Promise<any> => {
  const fullEvent = `${event}:${editor.languageId}`
  await ActivateByEvent.activateByEvent(fullEvent)
  // TODO
  const uid = 123
  // @ts-ignore
  const result = await ExtensionHostWorker.invoke(method, uid, ...args)
  return result
}
