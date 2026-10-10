import { cp, readFile, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = import.meta.dirname

const root = join(__dirname, '..', '..', '..')

export const getRemoteUrl = (path) => {
  const url = pathToFileURL(path).toString().slice(8)
  return `/remote/${url}`
}

const workerPath = join(root, '.tmp', 'dist', 'dist', 'renameWorkerMain.js')

const staticServerPackagePath = fileURLToPath(new URL('.', import.meta.resolve('@lvce-editor/static-server/package.json')))
const sharedProcessPackagePath = fileURLToPath(new URL('.', import.meta.resolve('@lvce-editor/shared-process/package.json')))
const serverStaticPath = join(staticServerPackagePath, 'static')

const staticServerConfigPath = join(staticServerPackagePath, 'config.json')

const sharedProcessConfigPath = join(sharedProcessPackagePath, 'config.json')

const RE_COMMIT_HASH = /^[a-z\d]+$/
const isCommitHash = (dirent) => {
  return dirent.length === 7 && dirent.match(RE_COMMIT_HASH)
}

const dirents = await readdir(serverStaticPath)
const commitHash = dirents.find(isCommitHash) || ''
const rendererWorkerDistPath = join(serverStaticPath, commitHash, 'packages', 'renderer-worker', 'dist')
const remoteUrl = getRemoteUrl(workerPath)
const rendererFiles = await readdir(rendererWorkerDistPath)
let found = false
for (const file of rendererFiles) {
  if (!file.endsWith('.js')) {
    continue
  }
  const filePath = join(rendererWorkerDistPath, file)
  const content = await readFile(filePath, 'utf-8')
  if (!content.includes('const renameWorkerUrl = ')) {
    continue
  }
  const newContent = content.replace(/^const renameWorkerUrl = .*$/m, `const renameWorkerUrl = ${JSON.stringify(remoteUrl)};`)
  await writeFile(filePath, newContent)
  found = true
}
if (!found) {
  throw new Error('Rename worker URL not found in renderer chunks')
}

await cp(staticServerConfigPath, sharedProcessConfigPath)
