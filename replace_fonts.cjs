const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Headings: text-2xl to text-8xl -> change font-semibold to font-bold
      content = content.replace(/className="([^"]*(?:text-2xl|text-3xl|text-4xl|text-5xl|text-6xl|text-7xl|text-8xl)[^"]*)"/g, (match, classes) => {
        if (classes.includes('italic') && classes.includes('font-serif')) return match; // skip Hero name
        return 'className="' + classes
          .replace(/font-semibold/g, 'font-bold') + '"';
      });

      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir('src/components');
