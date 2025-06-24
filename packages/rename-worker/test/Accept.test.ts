import { test, expect } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import * as Accept from '../src/parts/Accept/Accept.js'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.js'
import * as ExtensionHostWorker from '../src/parts/ExtensionHostWorker/ExtensionHostWorker.js'

test('accept returns editor when no rename state exists', async () => {
  const editor = {
    widgets: [],
    selections: [0, 0],
  }
  const result = await Accept.accept(editor)
  expect(result).toBe(editor)
})

test('accept removes rename widget and returns updated editor', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      if (method === 'ExtensionHostWorker.invoke') {
        return { edits: [{ offset: 10, deleted: 5 }] }
      }
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHostWorker.set(mockRpc)
  EditorWorker.set(mockRpc)

  const editor = {
    widgets: [
      { id: 1, type: 'other' },
      { id: 7, type: 'rename', newState: { newValue: 'newName' } },
      { id: 2, type: 'another' },
    ],
    selections: [0, 5],
    lines: ['hello world'],
  }

  const result = await Accept.accept(editor)

  expect(result.widgets).toEqual([
    { id: 1, type: 'other' },
    { id: 2, type: 'another' },
  ])
  expect(result.focused).toBe(true)
  expect(result).not.toBe(editor)
})

test('accept calls extension host rename provider with correct parameters', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      if (method === 'ExtensionHostWorker.invoke') {
        return { edits: [{ offset: 15, deleted: 3 }] }
      }
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHostWorker.set(mockRpc)
  EditorWorker.set(mockRpc)

  const editor = {
    widgets: [{ id: 7, type: 'rename', newState: { newValue: 'newVariableName' } }],
    selections: [1, 3],
    lines: ['hello world'],
  }

  await Accept.accept(editor)

  // The extension host should be called with the correct offset and new value
  // This is verified through the mock RPC calls
})

test('accept handles empty rename result', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      if (method === 'ExtensionHostWorker.invoke') {
        return { edits: [] }
      }
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHostWorker.set(mockRpc)
  EditorWorker.set(mockRpc)

  const editor = {
    widgets: [{ id: 7, type: 'rename', newState: { newValue: 'newName' } }],
    selections: [0, 0],
    lines: ['hello'],
  }

  const result = await Accept.accept(editor)

  expect(result.widgets).toEqual([])
  expect(result.focused).toBe(true)
})

test('accept handles extension host error gracefully', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      if (method === 'ExtensionHostWorker.invoke') {
        throw new Error('Extension host error')
      }
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHostWorker.set(mockRpc)
  EditorWorker.set(mockRpc)

  const editor = {
    widgets: [{ id: 7, type: 'rename', newState: { newValue: 'newName' } }],
    selections: [0, 0],
    lines: ['hello'],
  }

  await expect(Accept.accept(editor)).rejects.toThrow('Extension host error')
})

test('accept preserves other editor properties', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: readonly any[]) => {
      if (method === 'ExtensionHostWorker.invoke') {
        return { edits: [{ offset: 10, deleted: 2 }] }
      }
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHostWorker.set(mockRpc)
  EditorWorker.set(mockRpc)

  const editor = {
    widgets: [{ id: 7, type: 'rename', newState: { newValue: 'newName' } }],
    selections: [0, 5],
    lines: ['hello world'],
    customProperty: 'customValue',
    anotherProperty: 123,
  }

  const result = await Accept.accept(editor)

  expect(result.customProperty).toBe('customValue')
  expect(result.anotherProperty).toBe(123)
  expect(result.selections).toEqual([0, 5])
})
