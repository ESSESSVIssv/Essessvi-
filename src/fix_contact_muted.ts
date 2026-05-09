import * as fs from 'fs';
let c = fs.readFileSync('src/components/Contact.tsx', 'utf8');
c = c.replace(/text-\[\#7B6D62\]/g, 'text-[#9BA4AF]');
fs.writeFileSync('src/components/Contact.tsx', c);
