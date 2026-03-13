import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectsDir = path.join(process.cwd(), "public", "projects");
const targetBytes = 300 * 1024;
const minWidth = 960;
const maxWidth = 1600;

async function convertImage(fileName) {
  const sourcePath = path.join(projectsDir, fileName);
  const baseName = fileName.replace(/\.[^.]+$/, "");
  const outputPath = path.join(projectsDir, `${baseName}.webp`);
  const sourceBuffer = await fs.readFile(sourcePath);
  const image = sharp(sourceBuffer, { animated: false });
  const metadata = await image.metadata();
  const originalWidth = metadata.width ?? maxWidth;
  let width = Math.min(originalWidth, maxWidth);
  let quality = 78;
  let outputBuffer = null;

  while (width >= minWidth) {
    for (quality = 78; quality >= 52; quality -= 6) {
      outputBuffer = await sharp(sourceBuffer, { animated: false })
        .resize({ width, withoutEnlargement: true })
        .webp({ quality, effort: 6 })
        .toBuffer();

      if (outputBuffer.length <= targetBytes) {
        await fs.writeFile(outputPath, outputBuffer);
        return {
          fileName,
          outputFileName: `${baseName}.webp`,
          width,
          quality,
          bytes: outputBuffer.length,
        };
      }
    }

    width -= 160;
  }

  outputBuffer = await sharp(sourceBuffer, { animated: false })
    .resize({ width: minWidth, withoutEnlargement: true })
    .webp({ quality: 48, effort: 6 })
    .toBuffer();

  await fs.writeFile(outputPath, outputBuffer);

  return {
    fileName,
    outputFileName: `${baseName}.webp`,
    width: minWidth,
    quality: 48,
    bytes: outputBuffer.length,
  };
}

async function main() {
  const entries = await fs.readdir(projectsDir);
  const pngFiles = entries.filter((entry) => entry.toLowerCase().endsWith(".png"));
  const results = [];

  for (const fileName of pngFiles) {
    results.push(await convertImage(fileName));
  }

  for (const result of results) {
    console.log(
      `${result.fileName} -> ${result.outputFileName} | width=${result.width} quality=${result.quality} sizeKB=${(result.bytes / 1024).toFixed(1)}`
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});