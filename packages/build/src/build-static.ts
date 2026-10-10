import { join } from 'node:path'
import { root } from './root.ts'
import { cp, readFile, readdir, writeFile } from 'node:fs/promises'

const sharedProcess = await import('@lvce-editor/shared-process')

process.env.PATH_PREFIX = '/rename-worker'
await sharedProcess.exportStatic({
  root,
  extensionPath: '',
  testPath: 'packages/e2e',
})

await cp(join(root, 'dist'), join(root, '.tmp', 'static'), { recursive: true })

const config = JSON.parse(await readFile(join(root, 'node_modules', '@lvce-editor', 'static-server', 'config.json'), 'utf8'))
await cp(
  join(root, '.tmp', 'dist', 'dist', 'renameWorkerMain.js'),
  join(root, '.tmp', 'static', config.commit, 'packages', 'rename-worker', 'dist', 'renameWorkerMain.js'),
)

const rendererDist = join(root, '.tmp', 'static', config.commit, 'packages', 'renderer-worker', 'dist')
let found = false
for (const file of await readdir(rendererDist)) {
  if (!file.endsWith('.js')) {
    continue
  }
  const filePath = join(rendererDist, file)
  const content = await readFile(filePath, 'utf8')
  if (!content.includes('const renameWorkerUrl = ')) {
    continue
  }
  const newContent = content.replace(
    /^const renameWorkerUrl = .*$/m,
    'const renameWorkerUrl = `${assetDir}/packages/rename-worker/dist/renameWorkerMain.js`;',
  )
  await writeFile(filePath, newContent)
  found = true
}
if (!found) {
  throw new Error('Rename worker URL not found in exported renderer chunks')
}
