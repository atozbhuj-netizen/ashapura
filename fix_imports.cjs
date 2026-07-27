const fs = require('fs');
const path = require('path');

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      if (content.includes("import React from 'react';")) {
        content = content.replace(/import React from 'react';[\r\n]*/g, '');
        modified = true;
      }
      if (content.includes("import { Clock, MapPin, Car } from 'lucide-react';")) {
        content = content.replace(/import \{ Clock, MapPin, Car \} from 'lucide-react';/, "import { MapPin, Car } from 'lucide-react';");
        modified = true;
      }
      if (modified) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}
walk('src');
