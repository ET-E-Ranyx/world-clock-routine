import fs from 'fs';
import pngToIco from 'png-to-ico';

pngToIco('icon.png').then(buf => {
    fs.writeFileSync('icon.ico', buf);
    console.log('Successfully generated icon.ico');
}).catch(err => {
    console.error('Error generating icon: ', err);
});
