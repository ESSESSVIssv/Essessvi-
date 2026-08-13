with open('src/constants.ts', 'r') as f:
    text = f.read()

import re
text = re.sub(r'bio: ".*?"', 'bio: "Aspiring Product Manager with hands-on experience in AI-powered products, workflow automation, product discovery, and user-focused product development. Experienced in market research, user journey mapping, product strategy, API integrations, and translating real-world problems into practical product solutions. Interested in building simple, scalable, and user-centric AI products that solve meaningful problems."', text, count=1, flags=re.DOTALL)

with open('src/constants.ts', 'w') as f:
    f.write(text)
