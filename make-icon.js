const { Jimp } = require('jimp');
const png2icons = require('png2icons');
const fs = require('fs');

async function createIcon() {
    // Create a 256x256 image with a stylish clock face
    const size = 256;
    const image = new Jimp({ width: size, height: size, color: 0x00000000 });

    const cx = size / 2;
    const cy = size / 2;
    const r = 110;

    // Draw circular gradient / filled circle
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const dx = x - cx;
            const dy = y - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist <= r) {
                // Background soft blue-teal gradient
                const alpha = Math.min(1, Math.max(0, r - dist + 1));
                const color = 0x4a90e2ff; // Blue
                image.setPixelColor(color, x, y);
            } else if (dist <= r + 4) {
                // Outer ring
                image.setPixelColor(0x2c3e50ff, x, y);
            }
        }
    }

    const pngBuffer = await image.getBuffer('image/png');
    fs.writeFileSync('icon.png', pngBuffer);

    // Convert to high quality multi-resolution ICO
    const icoBuffer = png2icons.createICO(pngBuffer, png2icons.BICUBIC2, 0, false, true);
    if (icoBuffer) {
        fs.writeFileSync('icon.ico', icoBuffer);
        console.log('Successfully generated valid icon.png and icon.ico');
    } else {
        console.error('Failed to create ICO');
    }
}

createIcon().catch(console.error);
