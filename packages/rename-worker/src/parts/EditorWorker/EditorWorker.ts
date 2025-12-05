import { EditorWorker } from '@lvce-editor/rpc-registry'

export const {
  activateByEvent,
  applyEdit,
  closeWidget,
  getOffsetAtCursor,
  getPositionAtCursor,
  getWordAt,
  invoke,
  sendMessagePortToExtensionHostWorker,
  set,
} = EditorWorker
