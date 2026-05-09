import * as fs from 'fs';
import * as path from 'path';

function walkDir(dir) {
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

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/bg-white/g, 'bg-[#F6EFE6]');
    content = content.replace(/bg-slate-50/g, 'bg-[#E7D8C7]');
    content = content.replace(/border-slate-100/g, 'border-[#111111]/10');
    content = content.replace(/bg-slate-100/g, 'bg-white/10');
    content = content.replace(/text-slate-500/g, 'text-[#7B6D62]');
    content = content.replace(/text-slate-600/g, 'text-[#7B6D62]');
    content = content.replace(/text-slate-900/g, 'text-[#111111]');
    content = content.replace(/text-slate-800/g, 'text-slate-100');
    content = content.replace(/bg-\[\#FAFAFA\]/g, 'bg-[#F6EFE6]');
    content = content.replace(/text-slate-100/g, 'text-slate-900');
    content = content.replace(/from-white/g, 'from-[#F6EFE6]');
    
    fs.writeFileSync(file, content);
});
