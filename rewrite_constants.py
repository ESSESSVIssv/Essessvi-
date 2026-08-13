import re

with open('src/constants.ts', 'r') as f:
    content = f.read()

# Replace NAV_LINKS
new_nav_links = """export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Awards", href: "/awards" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" }
];"""
content = re.sub(r'export const NAV_LINKS = \[.*?\];', new_nav_links, content, flags=re.DOTALL)

with open('src/constants.ts', 'w') as f:
    f.write(content)
