import * as KeyCode from '../KeyCode/KeyCode.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const getKeyBindings = (): readonly any[] => {
  return [
    {
      key: KeyCode.Enter,
      command: 'EditorRename.accept',
      when: WhenExpression.FocusEditorRename,
    },
  ]
}
