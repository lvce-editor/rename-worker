import * as EditorWorker from '../EditorWorker/EditorWorker.ts'

export const invoke = async (method: string, ...params: readonly any[]): Promise<any> => {
  // @ts-ignore
  const result = await EditorWorker.invoke('ExtensionHostWorker.invoke', method, editor.uid, ...args)
  return result
}
