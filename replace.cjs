const fs = require('fs');

let content = fs.readFileSync('src/constants.ts', 'utf8');

const experienceRegex = /export const EXPERIENCE = \[\s*\{([\s\S]*?)\},\s*\{([\s\S]*?)\},/g;

content = content.replace(experienceRegex, (match, p1, p2) => {
    return `export const EXPERIENCE = [
  {${p2}},
  {${p1}},`;
});

const projectsRegex = /export const PROJECTS = \[\s*\{([\s\S]*?)\},\s*\{([\s\S]*?)\},/g;

content = content.replace(projectsRegex, (match, p1, p2) => {
    return `export const PROJECTS = [
  {${p2}},
  {${p1}},`;
});

fs.writeFileSync('src/constants.ts', content);
