with open('src/constants.ts', 'r') as f:
    content = f.read()

old_bio = 'bio: "I am a final-year CSE student who combines product thinking with hands-on execution. From building AI-powered WhatsApp automation workflows to developing SpareXchange and JobLence (an AI job application assistant), I translate problem discovery into high-impact products. Currently seeking Product Management internships and full-time opportunities."'
new_bio = 'bio: "I am a recent B.Tech CSE graduate who combines product thinking with hands-on execution. From building AI-powered WhatsApp automation workflows to developing SpareXchange and JobLence (an AI job application assistant), I translate problem discovery into high-impact products. Currently seeking full-time Product Management opportunities."'

content = content.replace(old_bio, new_bio)

with open('src/constants.ts', 'w') as f:
    f.write(content)
