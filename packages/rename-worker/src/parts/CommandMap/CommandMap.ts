import * as Create from '../Create/Create.ts'
import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as Terminate from '../Terminate/Terminate.ts'

export const commandMap = {
  'Rename.create': Create.create,
  'Rename.getCommandIds': GetCommandIds.getCommandIds,
  'Rename.terminate': Terminate.terminate,
  'Rename.loadContent': LoadContent.loadContent,
}
