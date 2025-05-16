import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import * as Terminate from '../Terminate/Terminate.ts'

export const commandMap = {
  'ColorPicker.getCommandIds': GetCommandIds.getCommandIds,
  'ColorPicker.terminate': Terminate.terminate,
}
