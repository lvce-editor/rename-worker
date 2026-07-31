import { EditorWorker } from '@lvce-editor/rpc-registry'
import type { PositionAtCursor } from '../PositionAtCursor/PositionAtCursor.ts'

export const { closeWidget, getOffsetAtCursor, getWordAt, invoke, sendMessagePortToExtensionManagementWorker, set } = EditorWorker

export const getPositionAtCursor = (parentUid: number): Promise<PositionAtCursor> => {
  return EditorWorker.getPositionAtCursor(parentUid)
}
