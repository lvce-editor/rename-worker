import { EditorWorker } from '@lvce-editor/rpc-registry'

export const {
  invoke,
  set,
  getOffsetAtCursor,
  sendMessagePortToExtensionHostWorker,
  activateByEvent,
  applyEdit,
  closeWidget,
  getWordAt,
  getPositionAtCursor,
} = EditorWorker

export const registerMockRpc = EditorWorker.registerMockRpc
