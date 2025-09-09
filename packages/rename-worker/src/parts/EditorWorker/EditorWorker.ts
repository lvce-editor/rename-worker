import { MockRpc } from '@lvce-editor/rpc'
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
  registerMockRpc,
} = EditorWorker

export { MockRpc }
