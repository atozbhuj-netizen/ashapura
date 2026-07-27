const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (full.endsWith('.tsx') || full.endsWith('.ts')) {
      let content = fs.readFileSync(full, 'utf8');
      content = content.replace(/^import React[^;]*;\r?\n/gm, '');
      fs.writeFileSync(full, content);
    }
  }
};

walk('src');
console.log('Done');
