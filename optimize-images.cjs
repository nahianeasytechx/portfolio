const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const assetsDir = path.join(__dirname, 'src', 'assets');

async function optimizeImage(inputPath, maxWidth, maxHeight, quality = 80) {
  const ext = path.extname(inputPath).toLowerCase();
  const tmpPath = inputPath + '.tmp';

  try {
    const origSize = fs.statSync(inputPath).size;
    const metadata = await sharp(inputPath).metadata();
    console.log(`    Original: ${metadata.width}x${metadata.height} (${(origSize / 1024).toFixed(1)} KiB)`);

    let pipeline = sharp(inputPath).resize(maxWidth, maxHeight, {
      fit: 'inside',
      withoutEnlargement: true,
    });

    if (ext === '.webp') {
      pipeline = pipeline.webp({ quality });
    } else if (ext === '.png') {
      pipeline = pipeline.png({ quality: Math.min(quality, 100), compressionLevel: 9 });
    }

    // Write to temp file then rename to avoid file lock issues
    await pipeline.toFile(tmpPath);
    const newSize = fs.statSync(tmpPath).size;
    
    // Remove original and rename temp
    try { fs.unlinkSync(inputPath); } catch(e) {}
    fs.renameSync(tmpPath, inputPath);
    
    console.log(`    Optimized: (${(newSize / 1024).toFixed(1)} KiB) — saved ${((origSize - newSize) / 1024).toFixed(1)} KiB`);
  } catch (err) {
    // Cleanup temp
    try { fs.unlinkSync(tmpPath); } catch(e) {}
    console.error(`    Error: ${err.message}`);
  }
}

async function main() {
  console.log('=== Optimizing Images ===\n');

  // Hero image — displayed at max 800x580 on desktop
  console.log('Hero (b1.webp):');
  await optimizeImage(path.join(assetsDir, 'b1.webp'), 800, 580, 82);

  // Company logos — displayed at max 96x96, convert PNG to WebP
  console.log('\nCompany Logos:');
  const logoDir = path.join(assetsDir, 'companyLogo');
  const logos = fs.readdirSync(logoDir).filter(f => f.endsWith('.png') || f.endsWith('.webp'));
  for (const logo of logos) {
    console.log(`  ${logo}:`);
    await optimizeImage(path.join(logoDir, logo), 96, 96, 80);
  }

  // Project images — displayed at max 600x400
  console.log('\nProject Images:');
  const projDir = path.join(assetsDir, 'projects');
  const projects = fs.readdirSync(projDir).filter(f => f.endsWith('.webp'));
  for (const proj of projects) {
    console.log(`  ${proj}:`);
    await optimizeImage(path.join(projDir, proj), 600, 400, 80);
  }

  console.log('\n=== Done! ===');
}

main();
