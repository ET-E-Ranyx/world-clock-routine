const fs = require('fs');

const pkgPath = './package.json';
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
pkg.build = {
    appId: "com.worldclock.app",
    productName: "World Clock",
    win: {
        icon: "icon.png",
        target: "portable"
    }
};
pkg.scripts.build = "electron-builder --win";
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
