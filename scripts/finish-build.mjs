import fs from 'node:fs/promises';
await fs.mkdir('dist/track',{recursive:true});
await fs.copyFile('dist/index.html','dist/track/index.html');
await fs.writeFile('dist/.nojekyll','');
