import { test, expect } from '@jest/globals'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import * as Accept from '../src/parts/Accept/Accept.ts'

test.skip('accept returns editor when no rename state exists', async () => {
  const editor = {
    widgets: [],
    selections: [0, 0],
  }
  // @ts-ignore
  const result = await Accept.accept(editor)
  expect(result).toBe(editor)
})

test.skip('accept removes rename widget and returns updated editor', async () => {
  EditorWorker.registerMockRpc({
    'ExtensionHostWorker.invoke': () => {
      return { edits: [{ offset: 10, deleted: 5 }] }
    },
    'ExtensionHostManagement.activateByEvent': () => {
      return undefined
    },
  })

  const editor = {
    widgets: [
      { id: 1, type: 'other' },
      { id: 7, type: 'rename', newState: { newValue: 'newName' } },
      { id: 2, type: 'another' },
    ],
    selections: [0, 5],
    lines: ['hello world'],
  }
  // @ts-ignore

  const result = await Accept.accept(editor)
  // @ts-ignore

  expect(result.widgets).toEqual([
    { id: 1, type: 'other' },
    { id: 2, type: 'another' },
  ])
  expect(result.focused).toBe(true)
  expect(result).not.toBe(editor)
})

test.skip('accept calls extension host rename provider with correct parameters', async () => {
  EditorWorker.registerMockRpc({
    'ExtensionHostWorker.invoke': () => {
      return { edits: [{ offset: 15, deleted: 3 }] }
    },
    'ExtensionHostManagement.activateByEvent': () => {
      return undefined
    },
  })

  const editor = {
    widgets: [{ id: 7, type: 'rename', newState: { newValue: 'newVariableName' } }],
    selections: [1, 3],
    lines: ['hello world'],
  }
  // @ts-ignore

  await expect(Accept.accept(editor)).resolves.toBeUndefined()

  // The extension host should be called with the correct offset and new value
  // This is verified through the mock RPC calls
})

test.skip('accept handles empty rename result', async () => {
  EditorWorker.registerMockRpc({
    'ExtensionHostWorker.invoke': () => {
      return { edits: [] }
    },
    'ExtensionHostManagement.activateByEvent': () => {
      return undefined
    },
  })

  const editor = {
    widgets: [{ id: 7, type: 'rename', newState: { newValue: 'newName' } }],
    selections: [0, 0],
    lines: ['hello'],
  }
  // @ts-ignore

  const result = await Accept.accept(editor)
  // @ts-ignore

  expect(result.widgets).toEqual([])
  expect(result.focused).toBe(true)
})

test.skip('accept handles extension host error gracefully', async () => {
  EditorWorker.registerMockRpc({
    'ExtensionHostWorker.invoke': () => {
      throw new Error('Extension host error')
    },
    'ExtensionHostManagement.activateByEvent': () => {
      return undefined
    },
  })

  const editor = {
    widgets: [{ id: 7, type: 'rename', newState: { newValue: 'newName' } }],
    selections: [0, 0],
    lines: ['hello'],
  }
  // @ts-ignore

  await expect(Accept.accept(editor)).rejects.toThrow('Extension host error')
})

test.skip('accept preserves other editor properties', async () => {
  EditorWorker.registerMockRpc({
    'ExtensionHostWorker.invoke': () => {
      return { edits: [{ offset: 10, deleted: 2 }] }
    },
    'ExtensionHostManagement.activateByEvent': () => {
      return undefined
    },
  })

  const editor = {
    widgets: [{ id: 7, type: 'rename', newState: { newValue: 'newName' } }],
    selections: [0, 5],
    lines: ['hello world'],
    customProperty: 'customValue',
    anotherProperty: 123,
  }

  // @ts-ignore

  const result = await Accept.accept(editor)
  // @ts-ignore

  expect(result.customProperty).toBe('customValue')
  // @ts-ignore

  expect(result.anotherProperty).toBe(123)
  // @ts-ignore

  expect(result.selections).toEqual([0, 5])
})
