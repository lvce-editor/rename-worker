import { build } from 'esbuild'
import { join } from 'node:path'
import { root } from './root.ts'

const extensionNames = [
  'sample.rename-provider',
  'sample.rename-provider-apply-error',
  'sample.rename-provider-apply-invalid-document-uri',
  'sample.rename-provider-apply-invalid-edits',
  'sample.rename-provider-apply-invalid-inserted-text',
  'sample.rename-provider-apply-invalid-offset',
  'sample.rename-provider-error',
  'sample.rename-provider-invalid-return-value-missing-edits',
  'sample.rename-provider-invalid-return-value-undefined',
  'sample.rename-provider-type-error',
] as const

const buildE2eExtension = async (extensionName: string): Promise<void> => {
  const extensionPath = join(root, 'packages', 'e2e', 'fixtures', extensionName)
  await build({
    bundle: true,
    entryPoints: [join(extensionPath, 'main.js')],
    external: ['electron', 'node:*'],
    format: 'esm',
    outfile: join(extensionPath, 'dist', 'main.js'),
    platform: 'browser',
    target: 'esnext',
  })
}

export const buildE2eExtensions = async (): Promise<void> => {
  await Promise.all(extensionNames.map(buildE2eExtension))
}
