import * as KeyCode from '../KeyCode/KeyCode.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const getKeyBindings = (): readonly any[] => {
  return [
    {
      command: 'EditorRename.accept',
      key: KeyCode.Enter,
      when: WhenExpression.FocusEditorRename,
    },
  ]
}
