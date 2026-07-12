import { readdir, readFile, unlink, writeFile } from 'node:fs/promises'
import { basename, extname, join } from 'node:path'
import subsetFont from 'subset-font'

const distDirectory = 'dist'
const assetsDirectory = join(distDirectory, 'assets')
const fontSources = [
  'fonts/SiYuanHeiTiJiuZiXing-Regular-2.ttf',
  'fonts/LXGWWenKai-Regular.ttf'
]

const html = await readFile('index.html', 'utf8')
const css = await readFile('style.css', 'utf8')
const text = [
  html.replace(/<[^>]*>/g, ' '),
  ...[...css.matchAll(/content:\s*["']([^"']*)["']/g)].map((match) => match[1])
].join('')

const assets = await readdir(assetsDirectory)
const cssFiles = assets.filter((file) => extname(file) === '.css')

for (const source of fontSources) {
  const fontName = basename(source, '.ttf')
  const generatedFont = assets.find((file) => file.startsWith(`${fontName}-`) && extname(file) === '.ttf')

  if (!generatedFont) {
    throw new Error(`Could not find the built asset for ${source}`)
  }

  const subsetFontName = generatedFont.replace(/\.ttf$/, '.woff2')
  const subset = await subsetFont(await readFile(join(assetsDirectory, generatedFont)), text, {
    targetFormat: 'woff2'
  })

  await writeFile(join(assetsDirectory, subsetFontName), subset)

  for (const cssFile of cssFiles) {
    const cssPath = join(assetsDirectory, cssFile)
    const contents = await readFile(cssPath, 'utf8')
    await writeFile(cssPath, contents.replaceAll(generatedFont, subsetFontName))
  }

  await unlink(join(assetsDirectory, generatedFont))
}
