import fs from 'node:fs/promises';
for(const route of ['track','feedback']){await fs.mkdir('dist/'+route,{recursive:true});await fs.copyFile('dist/index.html','dist/'+route+'/index.html');}
await fs.writeFile('dist/.nojekyll','');
