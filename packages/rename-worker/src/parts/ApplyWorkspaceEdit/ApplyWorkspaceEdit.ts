import * as EditorWorker from '../EditorWorker/EditorWorker.ts'

export const applyWorkspaceEdit = async (editorUid: number, changes: readonly any[]): Promise<void> => {
  // @ts-ignore
  await EditorWorker.invoke('Editor.applyWorkspaceEdit', editorUid, changes)
}
