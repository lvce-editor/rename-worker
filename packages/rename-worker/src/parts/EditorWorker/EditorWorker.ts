import { EditorWorker } from '@lvce-editor/rpc-registry'

export const { invoke, set, sendMessagePortToExtensionHostWorker, activateByEvent, applyEdit, closeWidget, getWordAt, getPositionAtCursor } =
  EditorWorker
