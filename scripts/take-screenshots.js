import { chromium } from "playwright"
import { readFileSync, mkdirSync } from "fs"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"
import sharp from "sharp"

const DARK_MODE = true

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const projectRoot = resolve(__dirname, "..")
const outputDir = resolve(projectRoot, "src/assets/project-screenshots")

mkdirSync(outputDir, { recursive: true })

const proyectosPath = resolve(projectRoot, "src/data/proyectos.js")
const proyectosContent = readFileSync(proyectosPath, "utf-8")

const slugRegex = /slug:\s*"([^"]+)"/g
const urlRegex = /^\s*url:\s*"([^"]+)"/gm

const slugs = []
let slugMatch
while ((slugMatch = slugRegex.exec(proyectosContent)) !== null) {
  slugs.push(slugMatch[1])
}

const rawUrls = []
let urlMatch
while ((urlMatch = urlRegex.exec(proyectosContent)) !== null) {
  rawUrls.push(urlMatch[1])
}

const projects = slugs.map((slug, i) => ({ slug, url: rawUrls[i] }))

console.log(`Found ${projects.length} projects to screenshot:\n`)
projects.forEach(({ slug, url }) => console.log(`  - ${slug}: ${url}`))
console.log()

const browser = await chromium.launch()
const colorScheme = DARK_MODE ? "dark" : "light"
console.log(`Theme: ${colorScheme}\n`)

for (const { slug, url } of projects) {
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 },
    colorScheme
  })

  try {
    console.log(`Capturing ${slug}...`)
    await page.goto(url, { waitUntil: "networkidle", timeout: 30000 })
    await page.waitForTimeout(2000)

    const pngBuffer = await page.screenshot({ fullPage: false, type: "png" })

    const outputPath = resolve(outputDir, `${slug}.webp`)
    await sharp(pngBuffer).webp({ quality: 80 }).toFile(outputPath)

    console.log(`  Saved: src/assets/project-screenshots/${slug}.webp\n`)
  } catch (error) {
    console.error(`  Failed to capture ${slug}: ${error.message}\n`)
  } finally {
    await page.close()
  }
}

await browser.close()
console.log("Done! All screenshots captured.")
