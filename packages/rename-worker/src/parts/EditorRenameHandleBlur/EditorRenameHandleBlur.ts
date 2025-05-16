import * as EditorCommandCloseRename from '../EditorCommandClose/EditorCommandCloseRename.ts'

export const handleBlur = (editor: any): any => {
  return EditorCommandCloseRename.closeRename(editor)
}
