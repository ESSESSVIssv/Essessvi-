import * as fs from 'fs';
import * as path from 'path';

function walkDir(dir: string): string[] {
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
    
    // Background replacements
    content = content.replace(/#F6EFE6/ig, '#F6EFE6');
    
    // Surface/Card replacements
    content = content.replace(/#E7D8C7/ig, '#E7D8C7');
    
    // Primary Accent
    content = content.replace(/#FF7A00/ig, '#FF7A00');
    content = content.replace(/216,185,138/g, '216,185,138'); // Glows
    
    // Secondary Accent
    content = content.replace(/#FF7A00/ig, '#FF7A00');
    
    // Main Text
    content = content.replace(/#111111/ig, '#111111');
    
    // Muted Text
    content = content.replace(/#7B6D62/ig, '#7B6D62');
    
    fs.writeFileSync(file, content);
});
console.log("Colors successfully replaced with warm palette!");
