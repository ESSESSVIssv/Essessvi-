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
    content = content.replace(/bg-\[\#050505\]/g, 'bg-[#F6EFE6]');
    content = content.replace(/from-\[\#050505\]/g, 'from-[#F6EFE6]');
    content = content.replace(/bg-[#F6EFE6] py-6/g, 'bg-[#F6EFE6] py-6');
    
    // Surface/Card replacements
    content = content.replace(/bg-white\/5/g, 'bg-[#E7D8C7]');
    content = content.replace(/bg-\[\#0a0a0a\]/g, 'bg-[#E7D8C7]');
    
    // Primary Accent
    content = content.replace(/#FF7A00/g, '#FF7A00');
    content = content.replace(/216,185,138/g, '216,185,138');
    
    // Main Text
    content = content.replace(/text-[#111111]/g, 'text-[#111111]');
    content = content.replace(/text-[#111111]\b/g, 'text-[#111111]');
    content = content.replace(/text-[#111111]/g, 'text-[#111111]');
    content = content.replace(/text-[#111111]/g, 'text-[#111111]');
    content = content.replace(/group-hover:text-[#111111]/g, 'group-hover:text-[#111111]');
    
    // Muted Text
    content = content.replace(/text-[#7B6D62]/g, 'text-[#7B6D62]');
    content = content.replace(/text-[#7B6D62]/g, 'text-[#7B6D62]');
    
    // Borders
    content = content.replace(/border-white\/10/g, 'border-[#111111]/10');
    content = content.replace(/border-white\/5/g, 'border-[#111111]/5');

    // Add luxury highlight to specific areas
    // Let's replace the group-hover:text-amber-500 from the older version or add some Luxury Highlight
    // 'text-[#FF7A00]' -> for some items let's use '#FF7A00' manually in specific components
    
    fs.writeFileSync(file, content);
});
console.log("Colors successfully replaced with exact palette!");
