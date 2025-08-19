import type { Change } from '../Change/Change.ts'

export const getEdits = async (editorUid: number): Promise<readonly Change[]> => {
  // const word = completionItem.label
  // const resolvedItem = await resolveCompletion(editorUid, word, completionItem)
  // const inserted = resolvedItem ? resolvedItem.snippet : word
  // const lines = await GetLines.getLines(editorUid)
  // const selections = await GetSelections.getSelections(editorUid)
  // const [startRowIndex, startColumnIndex] = selections
  // const leadingWordLength = leadingWord.length
  // const replaceRange = new Uint32Array([startRowIndex, startColumnIndex - leadingWordLength, startRowIndex, startColumnIndex])
  const changes: readonly Change[] = []
  return changes
}
