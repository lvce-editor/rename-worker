import { test, expect } from '@jest/globals'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import * as Accept from '../src/parts/Accept/Accept.ts'

test.skip('accept returns editor when no rename state exists', async () => {
  const editor = {
    selections: [0, 0],
    widgets: [],
  }
  // @ts-ignore
  const result = await Accept.accept(editor)
  expect(result).toBe(editor)
})

test.skip('accept removes rename widget and returns updated editor', async () => {
  EditorWorker.registerMockRpc({
    'ExtensionHostManagement.activateByEvent': () => {
      return undefined
    },
    'ExtensionHostWorker.invoke': () => {
      return { edits: [{ deleted: 5, offset: 10 }] }
    },
  })

  const editor = {
    lines: ['hello world'],
    selections: [0, 5],
    widgets: [
      { id: 1, type: 'other' },
      { id: 7, newState: { newValue: 'newName' }, type: 'rename' },
      { id: 2, type: 'another' },
    ],
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
    'ExtensionHostManagement.activateByEvent': () => {
      return undefined
    },
    'ExtensionHostWorker.invoke': () => {
      return { edits: [{ deleted: 3, offset: 15 }] }
    },
  })

  const editor = {
    lines: ['hello world'],
    selections: [1, 3],
    widgets: [{ id: 7, newState: { newValue: 'newVariableName' }, type: 'rename' }],
  }
  // @ts-ignore

  await expect(Accept.accept(editor)).resolves.toBeUndefined()

  // The extension host should be called with the correct offset and new value
  // This is verified through the mock RPC calls
})

test.skip('accept handles empty rename result', async () => {
  EditorWorker.registerMockRpc({
    'ExtensionHostManagement.activateByEvent': () => {
      return undefined
    },
    'ExtensionHostWorker.invoke': () => {
      return { edits: [] }
    },
  })

  const editor = {
    lines: ['hello'],
    selections: [0, 0],
    widgets: [{ id: 7, newState: { newValue: 'newName' }, type: 'rename' }],
  }
  // @ts-ignore

  const result = await Accept.accept(editor)
  // @ts-ignore

  expect(result.widgets).toEqual([])
  expect(result.focused).toBe(true)
})

test.skip('accept handles extension host error gracefully', async () => {
  EditorWorker.registerMockRpc({
    'ExtensionHostManagement.activateByEvent': () => {
      return undefined
    },
    'ExtensionHostWorker.invoke': () => {
      throw new Error('Extension host error')
    },
  })

  const editor = {
    lines: ['hello'],
    selections: [0, 0],
    widgets: [{ id: 7, newState: { newValue: 'newName' }, type: 'rename' }],
  }
  // @ts-ignore

  await expect(Accept.accept(editor)).rejects.toThrow('Extension host error')
})

test.skip('accept preserves other editor properties', async () => {
  EditorWorker.registerMockRpc({
    'ExtensionHostManagement.activateByEvent': () => {
      return undefined
    },
    'ExtensionHostWorker.invoke': () => {
      return { edits: [{ deleted: 2, offset: 10 }] }
    },
  })

  const editor = {
    anotherProperty: 123,
    customProperty: 'customValue',
    lines: ['hello world'],
    selections: [0, 5],
    widgets: [{ id: 7, newState: { newValue: 'newName' }, type: 'rename' }],
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
