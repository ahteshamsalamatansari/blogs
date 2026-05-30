const fs = require('fs');
const path = require('path');

function getPngDimensions(buffer) {
  if (buffer.toString('ascii', 1, 4) !== 'PNG') {
    throw new Error('Not a PNG');
  }
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  return { width, height };
}

const publicDir = path.join(process.cwd(), 'public');
const images = ['image-5.png', 'image-5-thumb.png'];

images.forEach(img => {
  try {
    const filePath = path.join(publicDir, img);
    const buffer = fs.readFileSync(filePath);
    const dims = getPngDimensions(buffer);
    console.log(`${img}: ${dims.width}x${dims.height} (Aspect ratio: ${(dims.width / dims.height).toFixed(3)})`);
  } catch (e) {
    console.log(`${img}: Error: ${e.message}`);
  }
});
