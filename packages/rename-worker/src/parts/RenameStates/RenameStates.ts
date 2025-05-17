import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { RenameState } from '../RenameState/RenameState.ts'

export const { get, set, dispose, getKeys, wrapCommand } = ViewletRegistry.create<RenameState>()
