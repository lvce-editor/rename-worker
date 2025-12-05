import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { RenameState } from '../RenameState/RenameState.ts'

export const { dispose, get, getKeys, set, wrapCommand } = ViewletRegistry.create<RenameState>()
