import re

with open("src/components/Skills.tsx", "r") as f:
    content = f.read()

# Replace the card wrapper and top part
pattern_card = r'className="premium-card p-8 group flex flex-col min-h-\[350px\]"\s*>\s*<div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-8 group-hover:scale-110 transition-all duration-500">\s*<Icon size=\{20\} />\s*</div>\s*<div className="text-\[10px\] font-mono text-brand mb-4 uppercase tracking-\[0\.4em\] font-light opacity-60 group-hover:opacity-100 transition-opacity">\s*\{cat\.category === "Product Management" \? "Market Logic" : cat\.category === "Technical Stack" \? "Engineering Edge" : "Strategic Thinking"\}\s*</div>'

new_card = """className="relative bg-[#F6F2EA] rounded-2xl border border-[#DDD5C8] p-10 group flex flex-col min-h-[350px] shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-brand/10 to-transparent opacity-50 pointer-events-none"></div>
                
                <div className="relative z-10 w-14 h-14 rounded-full bg-[#FBF6F0] border border-brand/30 flex items-center justify-center text-brand mb-10 group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(184,115,51,0.15)]">
                  <Icon size={22} />
                </div>
                <div className="relative z-10 text-[10px] font-mono text-brand mb-4 uppercase tracking-[0.4em] font-light opacity-80">
                  {cat.category === "Product Management" ? "Market Logic" : cat.category === "Technical Stack" ? "Engineering Edge" : "Strategic Thinking"}
                </div>
                <div className="relative z-10 w-12 h-[1px] bg-brand/40 mb-8"></div>"""

content = re.sub(pattern_card, new_card, content)

# Replace the span part
pattern_span = r'<span\s*key=\{item\}\s*className="text-\[10px\] font-mono font-light uppercase tracking-widest px-4 py-2 bg-transparent text-text-main/80 rounded-lg border-2 border-text-main/10 hover:border-brand/40 hover:text-text-main transition-all font-normal"\s*>'

new_span = """<span 
                       key={item} 
                       className="relative z-10 text-[10px] font-mono font-light uppercase tracking-widest px-5 py-2.5 bg-[#FBF6F0] text-text-main/80 rounded-xl border border-[#D9C7B2] hover:bg-brand hover:text-[#F5F1E8] hover:border-brand hover:-translate-y-[3px] hover:shadow-[0_4px_12px_rgba(184,115,51,0.2)] transition-all duration-300 font-normal"
                    >"""

content = re.sub(pattern_span, new_span, content)

with open("src/components/Skills.tsx", "w") as f:
    f.write(content)
