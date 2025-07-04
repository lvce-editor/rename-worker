import { terminate } from '@lvce-editor/viewlet-registry'
import * as Accept from '../Accept/Accept.ts'
import * as Close from '../Close/Close.ts'
import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as Dispose from '../Dispose/Dispose.ts'
import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import * as HandleBlur from '../HandleBlur/HandleBlur.ts'
import * as Initialize from '../Initialize/Initialize.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as RenameStates from '../RenameStates/RenameStates.ts'
import * as Render2 from '../Render2/Render2.ts'

export const commandMap = {
  'Rename.accept': Accept.accept,
  'Rename.create': Create.create,
  'Rename.diff2': Diff2.diff2,
  'Rename.dispose': Dispose.dispose,
  'Rename.getCommandIds': GetCommandIds.getCommandIds,
  'Rename.handleBlur': RenameStates.wrapCommand(HandleBlur.handleBlur),
  'Rename.loadContent': RenameStates.wrapCommand(LoadContent.loadContent),
  'Rename.render2': Render2.render2,
  'Rename.close': RenameStates.wrapCommand(Close.close),
  'Rename.terminate': terminate,
  'Rename.initialize': Initialize.initialize,
}
