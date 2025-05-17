import * as Accept from '../Accept/Accept.ts'
import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import * as HandleBlur from '../HandleBlur/HandleBlur.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as Render2 from '../Render2/Render2.ts'
import * as Terminate from '../Terminate/Terminate.ts'

export const commandMap = {
  'Rename.accept': Accept.accept,
  'Rename.create': Create.create,
  'Rename.diff2': Diff2.diff2,
  'Rename.getCommandIds': GetCommandIds.getCommandIds,
  'Rename.handleBlur': HandleBlur.handleBlur,
  'Rename.loadContent': LoadContent.loadContent,
  'Rename.terminate': Terminate.terminate,
  'Rename.render2': Render2.render2,
}
