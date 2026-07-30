import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { RenameState } from '../RenameState/RenameState.ts'

export const { dispose, get, set, wrapCommand } = ViewletRegistry.create<RenameState>()
