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
        } else if (file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walkDir('./src/components');
files.push('./src/App.tsx');
files.push('./src/index.css');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace blue-400, blue-600 with the unique neon lime #FF7A00
    content = content.replace(/text-blue-400/g, 'text-[#FF7A00]');
    content = content.replace(/text-blue-600/g, 'text-[#FF7A00]');
    content = content.replace(/bg-blue-600/g, 'bg-[#FF7A00]');
    
    // Make text black on hover inside the buttons that become lime!
    content = content.replace(/group-hover:text-[#111111]/g, 'group-hover:text-[#111111]');
    
    content = content.replace(/rgba\(56,189,248,0\.15\)/g, 'rgba(255,122,0,0.15)'); // Glow in Hero
    content = content.replace(/indigo-600\/10/g, '[#FF7A00]/10'); // Glow in Contact
    content = content.replace(/amber-500/g, '[#FF7A00]'); // Experience highlight
    content = content.replace(/bg-blue-50/g, 'bg-[#FF7A00]'); // Not in components but just in case
    
    // index.css
    content = content.replace(/--color-accent: #38BDF8;/g, '--color-accent: #FF7A00;');
    
    fs.writeFileSync(file, content);
});
console.log("Colors successfully replaced!");
