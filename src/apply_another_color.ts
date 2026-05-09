import * as fs from 'fs';
import * as path from 'path';

function walkDir(dir: string) {
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
            results.push(file);
        }
    });
    return results;
}

const files = walkDir('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace the previous lime green with a striking Neon Pink / Coral
    content = content.replace(/#FF7A00/g, '#FF7A00');
    content = content.replace(/216,185,138/g, '216,185,138');
    
    // For text colors that might have been changed to black on hover, we want them white
    content = content.replace(/group-hover:text-\[\#050505\]/g, 'group-hover:text-[#111111]');
    
    fs.writeFileSync(file, content);
});
console.log("Colors successfully replaced with Neon Pink!");
