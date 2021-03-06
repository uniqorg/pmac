// eslint-disable-next-line unicorn/prefer-node-protocol
import { PathLike, WriteFileOptions } from 'fs'
// eslint-disable-next-line unicorn/prefer-node-protocol
import fs from 'fs/promises'
// eslint-disable-next-line unicorn/prefer-node-protocol
import path from 'path'

async function readJsonFile<T = any>(
  path: PathLike,
  options?:
      | BufferEncoding | {
        encoding: BufferEncoding;
        flag?: string | undefined;
    },
) {
  const content = await fs.readFile(path, options || 'utf8')
  return JSON.parse(content) as T
}

async function writeJsonFile<T = any>(
  path: PathLike,
  data: T,
  options?: WriteFileOptions | undefined,
) {
  const stringifyContent = JSON.stringify(data, null, 2)
  await fs.writeFile(path, stringifyContent, options || 'utf8')
}

function getRootDirRelativePath(abosultePath: string) {
  return path.relative('.', abosultePath)
}

export const pmacFsUtils = {
  readJsonFile,
  writeJsonFile,
  getRootDirRelativePath,
}
