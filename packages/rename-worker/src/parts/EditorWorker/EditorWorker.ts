import { EditorWorker } from '@lvce-editor/rpc-registry'
import type { PositionAtCursor } from '../PositionAtCursor/PositionAtCursor.ts'

export const { activateByEvent, applyEdit, closeWidget, getOffsetAtCursor, getWordAt, invoke, sendMessagePortToExtensionHostWorker, set } =
  EditorWorker

export const getPositionAtCursor = (parentUid: number): Promise<PositionAtCursor> => {
  return EditorWorker.getPositionAtCursor(parentUid)
}
