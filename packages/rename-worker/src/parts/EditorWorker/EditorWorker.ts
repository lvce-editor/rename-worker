import { EditorWorker } from '@lvce-editor/rpc-registry'
import type { PositionAtCursor } from '../PositionAtCursor/PositionAtCursor.ts'

export const closeWidget = (
  editorUid: number,
  widgetId: number,
  widgetName: string,
  focusId: number,
): ReturnType<typeof EditorWorker.closeWidget> => {
  return EditorWorker.closeWidget(editorUid, widgetId, widgetName, focusId)
}

export const getOffsetAtCursor = (editorId: number): ReturnType<typeof EditorWorker.getOffsetAtCursor> => {
  return EditorWorker.getOffsetAtCursor(editorId)
}

export const getWordAt = (uid: number, rowIndex: number, columnIndex: number): ReturnType<typeof EditorWorker.getWordAt> => {
  return EditorWorker.getWordAt(uid, rowIndex, columnIndex)
}

export const invoke = (method: string, ...params: readonly unknown[]): ReturnType<typeof EditorWorker.invoke> => {
  return EditorWorker.invoke(method, ...params)
}

export const sendMessagePortToExtensionManagementWorker = (
  port: Readonly<Parameters<typeof EditorWorker.sendMessagePortToExtensionManagementWorker>[0]>,
): ReturnType<typeof EditorWorker.sendMessagePortToExtensionManagementWorker> => {
  return EditorWorker.sendMessagePortToExtensionManagementWorker(port)
}

export const set = (rpc: Readonly<Parameters<typeof EditorWorker.set>[0]>): ReturnType<typeof EditorWorker.set> => {
  return EditorWorker.set(rpc)
}

export const getPositionAtCursor = (parentUid: number): Promise<PositionAtCursor> => {
  return EditorWorker.getPositionAtCursor(parentUid)
}
