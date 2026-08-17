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
const rendererWorkerMainPath = join(serverStaticPath, commitHash, 'packages', 'renderer-worker', 'dist', 'rendererWorkerMain.js')

const content = await readFile(rendererWorkerMainPath, 'utf-8')

const remoteUrl = getRemoteUrl(workerPath)
if (!content.includes('// const renameWorkerUrl = ')) {
  const occurrence = `const renameWorkerUrl = \`\${assetDir}/packages/rename-worker/dist/renameWorkerMain.js\``
  const replacement = `// const renameWorkerUrl = \`\${assetDir}/packages/rename-worker/dist/renameWorkerMain.js\`
const renameWorkerUrl = \`${remoteUrl}\``

  const newContent = content.replace(occurrence, replacement)
  await writeFile(rendererWorkerMainPath, newContent)
}

await cp(staticServerConfigPath, sharedProcessConfigPath)
