import * as fs from 'fs';
import * as path from 'path';

function replaceInFile(filePath: string, replaceFn: (content: string) => string) {
    const fullPath = path.join(process.cwd(), filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    content = replaceFn(content);
    fs.writeFileSync(fullPath, content);
}

// Harmonize palettes to make them coheseive while retaining section vibes

// --- HOME ---
replaceInFile('src/components/Hero.tsx', (content) => {
    // Keep #14110F
    // Ensure texts are #FFF8F0 and #B7A89A
    content = content.replace(/text-\[\#111111\]/g, 'text-[#FFF8F0]');
    content = content.replace(/text-\[\#7B6D62\]/g, 'text-[#B7A89A]');
    // Accent #C56E33
    return content;
});

// --- SERVICES (Light variant 1) ---
replaceInFile('src/components/Services.tsx', (content) => {
    // bg-[#F3E8DA]
    // Text #1A1614, Muted #6E6258, Accent #C56E33
    return content;
});

// --- VISION ---
replaceInFile('src/components/Vision.tsx', (content) => {
    // It was #1B1F2A (cool navy), let's make it #1A1515 (warm dark charcoal) for cohesion
    content = content.replace(/bg-\[\#1B1F2A\]/g, 'bg-[#1A1515]');
    // Subtext was #A8A6B3 (cool gray), let's make it #B7A89A (warm gray)
    content = content.replace(/text-\[\#A8A6B3\]/g, 'text-[#B7A89A]');
    return content;
});

// --- PROJECTS ---
replaceInFile('src/components/Projects.tsx', (content) => {
    // Maintain #181412 or #14110F. Let's use #181412 (very dark brown)
    // Accent is #FF8A3D. Let's unify with #C56E33.
    content = content.replace(/bg-\[\#FF8A3D\]/g, 'bg-[#C56E33]');
    content = content.replace(/rgba\(255,138,61,0\.25\)/g, 'rgba(197,110,51,0.28)');
    return content;
});

// --- EXPERIENCE (Light variant 2) ---
replaceInFile('src/components/Experience.tsx', (content) => {
    // Was #EFE5D8, let's unify light backgrounds to #F3E8DA for a consistent scroll feel
    content = content.replace(/bg-\[\#EFE5D8\]/g, 'bg-[#F3E8DA]');
    // Accent was #B86A3B, unify to #C56E33
    content = content.replace(/text-\[\#B86A3B\]/g, 'text-[#C56E33]');
    // Timeline Card was #DCC7AF, let's keep it or change to #E4D2BF (Services card bg)
    content = content.replace(/bg-\[\#DCC7AF\]/g, 'bg-[#E4D2BF]');
    return content;
});

// --- CONTACT ---
replaceInFile('src/components/Contact.tsx', (content) => {
    // Was #0F1720 (cool slate), let's make it #14110F (same as Home for book-ending the site)
    content = content.replace(/bg-\[\#0F1720\]/g, 'bg-[#14110F]');
    // Input/Cards was #1D2733 (cool slate light), make it #201A17 (Projects card bg)
    content = content.replace(/bg-\[\#1D2733\]/g, 'bg-[#201A17]');
    // Muted text was #9BA4AF (cool gray), make it #B7A89A (warm gray)
    content = content.replace(/text-\[\#9BA4AF\]/g, 'text-[#B7A89A]');
    // Accent is #C56E33, Hover #E8B98A (perfect)
    return content;
});

// --- NAVIGATION ---
replaceInFile('src/components/Navigation.tsx', (content) => {
    // bg-[#14110F]
    return content;
});

// --- FOOTER ---
replaceInFile('src/components/Footer.tsx', (content) => {
    // bg-[#0F1720] -> #14110F
    content = content.replace(/bg-\[\#0F1720\]/g, 'bg-[#14110F]');
    // Cards #1D2733 -> #201A17
    content = content.replace(/bg-\[\#1D2733\]/g, 'bg-[#201A17]');
    // Muted #7B6D62 -> #B7A89A
    content = content.replace(/text-\[\#7B6D62\]/g, 'text-[#B7A89A]');
    // Hover text-[#FFF8F0]
    // Hover bg-[#F6EFE6] -> bg-[#E8B98A]
    content = content.replace(/hover:bg-\[\#F6EFE6\]/g, 'hover:bg-[#E8B98A]');
    return content;
});

console.log("Unified colors successfully!");
