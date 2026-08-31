import re

with open('src/constants.ts', 'r') as f:
    content = f.read()

content = content.replace('title: "AgentRoomAI",', 'title: "AI WhatsApp Agent",')

with open('src/constants.ts', 'w') as f:
    f.write(content)
