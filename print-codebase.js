#!/usr/bin/env node
/**
 * print-codebase.js
 * Prints the file tree and (optionally) the contents of every source file.
 *
 * Usage:
 *   node print-codebase.js          → tree only
 *   node print-codebase.js --full   → tree + file contents
 *   node print-codebase.js --out output.txt --full  → write to file
 */

import fs from 'fs'
import path from 'path'

// ── Config ────────────────────────────────────────────────────
const ROOT = process.cwd()

const IGNORE_DIRS = new Set([
  'node_modules', '.git', 'dist', '.vite', 'build', 'coverage', '.cache',
])

const IGNORE_FILES = new Set([
  '.DS_Store', 'Thumbs.db', 'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
])

const TEXT_EXTENSIONS = new Set([
  '.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.json',
  '.md', '.env', '.txt', '.yaml', '.yml', '.config',
])

// ── CLI args ──────────────────────────────────────────────────
const args = process.argv.slice(2)
const FULL  = args.includes('--full')
const outIdx = args.indexOf('--out')
const OUT_FILE = outIdx !== -1 ? args[outIdx + 1] : null

// ── Helpers ───────────────────────────────────────────────────
const lines = []
const write = (str = '') => lines.push(str)

function isText(file) {
  return TEXT_EXTENSIONS.has(path.extname(file).toLowerCase())
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

// ── Tree printer ──────────────────────────────────────────────
function printTree(dir, prefix = '') {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      // dirs first, then files
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  filtered.forEach((entry, idx) => {
    const isLast    = idx === filtered.length - 1
    const connector = isLast ? '└── ' : '├── '
    const childPfx  = isLast ? '    ' : '│   '
    const fullPath  = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      write(`${prefix}${connector}${entry.name}/`)
      printTree(fullPath, prefix + childPfx)
    } else {
      const size = formatSize(fs.statSync(fullPath).size)
      write(`${prefix}${connector}${entry.name}  (${size})`)
    }
  })
}

// ── Content printer ───────────────────────────────────────────
function printContents(dir) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  for (const entry of filtered) {
    const fullPath = path.join(dir, entry.name)
    const relPath  = path.relative(ROOT, fullPath)

    if (entry.isDirectory()) {
      printContents(fullPath)
    } else if (isText(entry.name)) {
      const ext  = path.extname(entry.name).slice(1) || 'txt'
      const size = formatSize(fs.statSync(fullPath).size)
      write('')
      write('─'.repeat(70))
      write(`FILE: ${relPath}  (${size})`)
      write('─'.repeat(70))
      try {
        write('```' + ext)
        write(fs.readFileSync(fullPath, 'utf8').trimEnd())
        write('```')
      } catch {
        write('[binary / unreadable]')
      }
    }
  }
}

// ── Main ──────────────────────────────────────────────────────
const projectName = path.basename(ROOT)

write('='.repeat(70))
write(`  StudyHive Frontend — Codebase Snapshot`)
write(`  Root : ${ROOT}`)
write(`  Date : ${new Date().toLocaleString()}`)
write('='.repeat(70))
write('')
write(`${projectName}/`)
printTree(ROOT)

if (FULL) {
  write('')
  write('='.repeat(70))
  write('  FILE CONTENTS')
  write('='.repeat(70))
  printContents(ROOT)
}

write('')
const output = lines.join('\n')

if (OUT_FILE) {
  fs.writeFileSync(OUT_FILE, output, 'utf8')
  console.log(`✓ Written to ${OUT_FILE}`)
} else {
  console.log(output)
}
