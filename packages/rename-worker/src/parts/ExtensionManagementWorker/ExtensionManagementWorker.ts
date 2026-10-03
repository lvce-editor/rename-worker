import { ExtensionManagementWorker } from '@lvce-editor/rpc-registry'

export const invoke = (method: string, ...params: readonly unknown[]): ReturnType<typeof ExtensionManagementWorker.invoke> => {
  return ExtensionManagementWorker.invoke(method, ...params)
}

export const set = (rpc: Readonly<Parameters<typeof ExtensionManagementWorker.set>[0]>): ReturnType<typeof ExtensionManagementWorker.set> => {
  return ExtensionManagementWorker.set(rpc)
}
