import { test, expect } from '@jest/globals'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import * as ExtensionHostEditor from '../src/parts/ExtensionHostEditor/ExtensionHostEditor.ts'

test.skip('execute activates event and calls ExtensionHostWorker.invoke', async () => {
  EditorWorker.registerMockRpc({
    'ExtensionHostManagement.activateByEvent': () => {
      return undefined
    },
    'ExtensionHostWorker.invoke': (_method: any, _uid: any, method: any, ...args: readonly any[]) => {
      return { method, uid: 123, args }
    },
  })

  const editor = { languageId: 'js' } as any
  const result = await ExtensionHostEditor.execute({ editor, args: [1, 2], event: 'onTest', method: 'doSomething' } as any)
  expect(result.method).toBe('doSomething')
  expect(result.uid).toBe(123)
  expect(result.args).toEqual([1, 2])
})
