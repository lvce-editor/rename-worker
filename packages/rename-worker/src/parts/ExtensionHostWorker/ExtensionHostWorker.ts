import { MockRpc } from '@lvce-editor/rpc'
import { ExtensionHost } from '@lvce-editor/rpc-registry'

export const { invoke, set, dispose, registerMockRpc } = ExtensionHost

export { MockRpc }
