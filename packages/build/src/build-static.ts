import { join } from 'node:path'
import { root } from './root.ts'
import { cp } from 'node:fs/promises'

const sharedProcess = await import('@lvce-editor/shared-process')

process.env.PATH_PREFIX = '/rename-worker'
await sharedProcess.exportStatic({
  root,
  extensionPath: '',
  testPath: 'packages/e2e',
})

await cp(join(root, 'dist'), join(root, '.tmp', 'static'), { recursive: true })
