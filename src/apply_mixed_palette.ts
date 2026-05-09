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

    // First do global light theme replacements globally
    // We'll override them later for dark theme sections
    content = content.replace(/#F6EFE6/g, '#F6EFE6'); // Main Background
    content = content.replace(/#E7D8C7/g, '#E7D8C7'); // Surface/Card Light
    content = content.replace(/#7B6D62/g, '#7B6D62'); // Muted Text
    
    // We'll keep #111111 as it is for light text.
    // Accent #FF7A00 is Luxury Accent. For hero "Hey there" it is D8B98A. 
    // We can swap it to Primary Accent FF7A00 for hovers, but let's keep things #FF7A00 mostly 
    // actually, replace most #FF7A00 to #FF7A00, then selectively restore #FF7A00 for 'Hey, there'.
    content = content.replace(/#FF7A00/g, '#FF7A00');
    content = content.replace(/rgba\(216,185,138/g, 'rgba(255,122,0');

    // Restore some luxury accents
    if (file.includes('Hero.tsx')) {
        content = content.replace(/text-\[\#FF7A00\]">Hey, there/g, 'text-[#FF7A00]">Hey, there');
    }
    if (file.includes('Footer.tsx')) {
        content = content.replace(/<span className="text-\[\#FF7A00\]">/g, '<span className="text-[#FF7A00]">');
    }

    // Now, apply Dark Section Theme overrides to Contact.tsx and Footer.tsx
    if (file.includes('Contact.tsx')) {
        // Change Contact wrapper from E7D8C7 to 2A1812 (Surface/Card Dark)
        content = content.replace(/#E7D8C7/g, '#2A1812');
        
        // Let's also wrap the entire Contact section in #1A0F0A (Dark Section Background)
        // Check if there's a padding section, it was `<section id="contact" className="section-padding">`
        content = content.replace(/<section id="contact" className="section-padding">/g, '<section id="contact" className="section-padding bg-[#1A0F0A]">');

        // Dark theme text content
        content = content.replace(/#111111/g, '#FFF6EE');
        
        // Muted text could remain #7B6D62, but maybe it won't contrast well on #2A1812?
        // #7B6D62 is 48% lightness. On #2A1812 (very dark), it's okay maybe.
    }

    if (file.includes('Footer.tsx')) {
        content = content.replace(/<footer className="/g, '<footer className="bg-[#1A0F0A] ');
        content = content.replace(/#E7D8C7/g, '#2A1812'); // Any surfaces in Footer -> surface dark
        content = content.replace(/#111111/g, '#FFF6EE'); // Text dark mode
    }

    // index.css adjustments
    if (file.includes('index.css')) {
        content = content.replace(/--color-accent: #[A-Za-z0-9]+;/g, '--color-accent: #FF7A00;');
    }

    fs.writeFileSync(file, content);
});

console.log("Colors successfully replaced with exact dark/light palette!");
