import * as fs from 'fs';
import * as path from 'path';

function walkDir(dir) {
    let results = [];
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
    content = content.replace(/bg-white/g, 'bg-[#050505]');
    content = content.replace(/bg-slate-50/g, 'bg-white/5');
    content = content.replace(/border-slate-100/g, 'border-white/10');
    content = content.replace(/bg-slate-100/g, 'bg-white/10');
    content = content.replace(/text-slate-500/g, 'text-slate-400');
    content = content.replace(/text-slate-600/g, 'text-slate-300');
    content = content.replace(/text-slate-900/g, 'text-slate-50');
    content = content.replace(/text-slate-800/g, 'text-slate-100');
    content = content.replace(/bg-\[\#FAFAFA\]/g, 'bg-[#050505]');
    
    // Reverse text-slate-100 for dark mode so things don't go black (wait, replacing 100 with 800)
    // Wait! Let's just make text-slate-100 text-slate-900 directly!
    content = content.replace(/text-slate-100/g, 'text-slate-900');
    
    // Also "text-navy" uses CSS var which I made white. Wait, what about gradient?
    content = content.replace(/from-white/g, 'from-[#050505]');
    
    fs.writeFileSync(file, content);
});
