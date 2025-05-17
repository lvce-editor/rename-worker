import type { RenameState } from '../RenameState/RenameState.ts'

export interface Renderer {
  (oldState: RenameState, newState: RenameState): readonly any[]
}
