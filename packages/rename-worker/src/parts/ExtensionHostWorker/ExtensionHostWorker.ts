import { ExtensionHost } from '@lvce-editor/rpc-registry'
import * as EditorWorker from '../EditorWorker/EditorWorker.ts'

// TODO use direct extension host connection
export const invoke = async (method: string, ...params: readonly any[]): Promise<any> => {
  // @ts-ignore
  const result = await EditorWorker.invoke('ExtensionHostWorker.invoke', method, editor.uid, ...args)
  return result
}

export const { set } = ExtensionHost
