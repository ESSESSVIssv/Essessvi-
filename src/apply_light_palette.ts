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
    
    // Primary Accent & Secondary Accent -> Accent Beige Gold
    content = content.replace(/#FF7A00/ig, '#FF7A00');
    content = content.replace(/216,185,138/g, '216,185,138'); // Glows
    content = content.replace(/#FF7A00/ig, '#FF7A00');
    
    // Main Text
    content = content.replace(/#111111/ig, '#111111');
    
    // Muted Text
    content = content.replace(/#7B6D62/ig, '#7B6D62');

    // Also fix some borders to be more visible on light theme
    // previously border was #111111/10, after text replace it becomes #111111/10 which is fine for light theme
    // Let's also do Secondary Background somewhere if we want, but sticking to Card/Section mapping is easiest.
    
    fs.writeFileSync(file, content);
});
console.log("Colors successfully replaced with light beige gold palette!");
