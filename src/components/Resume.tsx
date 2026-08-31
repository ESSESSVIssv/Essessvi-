import { Download } from 'lucide-react';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="min-h-screen bg-bg py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto flex justify-end items-center mb-12">
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-3 bg-brand text-white font-sans font-bold text-xs uppercase tracking-widest hover:bg-text-main transition-colors"
        >
          <Download className="w-4 h-4" /> Download PDF
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-white border border-border shadow-sm p-8 md:p-16 print:p-0 print:border-none print:shadow-none text-black">
        
        {/* Header */}
        <div className="text-center border-b-2 border-black pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-black font-serif uppercase mb-1">V. ESSESSVI</h1>
          <p className="text-xl font-bold font-serif mb-2">Aspiring Product Manager</p>
          <div className="text-sm font-sans flex flex-wrap justify-center gap-2">
            <span>9392964456</span>
            <span>|</span>
            <span>vessessvi2005@gmail.com</span>
            <span>|</span>
            <span>CHITTOOR</span>
          </div>
          <div className="text-sm font-sans flex flex-wrap justify-center gap-2 mt-1">
            <a href="https://linkedin.com/in/essessvi-vadlamudi" className="hover:underline">linkedin.com/in/essessvi-vadlamudi</a>
            <span>|</span>
            <a href="https://essessvi.vercel.app" className="hover:underline">essessvi.vercel.app</a>
          </div>
        </div>

        {/* Profile */}
        <div className="mb-6">
          <h2 className="text-lg font-bold font-serif uppercase border-b-2 border-black mb-2">PROFILE</h2>
          <p className="text-sm font-sans leading-relaxed text-justify">
            Aspiring Product Manager with hands-on experience building AI-powered products and user-focused solutions. Experienced in identifying user problems, conducting market and competitor research, mapping user journeys, defining product features, and prototyping solutions using AI and automation. Strong interest in AI products, consumer experiences, product discovery, and solving real-world problems through simple, practical products.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h2 className="text-lg font-bold font-serif uppercase border-b-2 border-black mb-2">SKILLS</h2>
          <div className="text-sm font-sans space-y-1">
            <p><strong>Product:</strong> Product Thinking | User Research | Product Discovery | User Journey Mapping | Feature Prioritization | MVP Definition | Market Research | Competitor Analysis | Product Documentation | Process Improvement</p>
            <p><strong>AI & Tools:</strong> AI Products | LLMs | n8n | OpenAI | Google AI Studio | Gemini API | WhatsApp Business API | Prompt Engineering | Workflow Automation | Notion | Google Sheets</p>
          </div>
        </div>

        {/* Experience / Product Projects */}
        <div className="mb-6">
          <h2 className="text-lg font-bold font-serif uppercase border-b-2 border-black mb-2">EXPERIENCE / PRODUCT PROJECTS</h2>
          
          <div className="mb-4">
            <div className="flex justify-between items-baseline font-bold font-serif">
              <h3>AgentRoomAI</h3>
              <span className="text-sm">Dec 2025 – Apr 2026</span>
            </div>
            <div className="text-sm font-serif font-bold mb-1">Role: Intern AI Workflow Engineer</div>
            <ul className="list-disc pl-5 text-sm font-sans space-y-0.5">
              <li>Identified customer challenges in the ordering process, including incomplete orders, unclear messages, confirmations, and support requests.</li>
              <li>Designed conversational flows to make customer ordering faster, simpler, and more reliable.</li>
              <li>Integrated AI models to understand customer intent and generate relevant real-time responses.</li>
              <li>Automated repetitive WhatsApp interactions to reduce manual effort and improve response handling.</li>
              <li>Identified edge cases and iterated workflows to create a more consistent and customer-friendly experience.</li>
              <li>Tested conversational flows and refined prompts and workflows based on observed user interactions.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline font-bold font-serif">
              <h3>SpareXChange</h3>
              <span className="text-sm">Jan 2025 – Mar 2025</span>
            </div>
            <div className="text-sm font-serif font-bold mb-1">Role: Product Lead & Developer</div>
            <ul className="list-disc pl-5 text-sm font-sans space-y-0.5">
              <li>Conducted user research and competitor analysis to identify customer needs and gaps in the automobile spare-parts market.</li>
              <li>Mapped user journeys and identified friction points in the spare-parts buying experience.</li>
              <li>Defined and prioritized product features based on user needs and business requirements.</li>
              <li>Designed an MVP focused on spare-part discovery, inventory visibility, and transaction management.</li>
              <li>Implemented a QR-based payment flow with OTP verification for a smoother transaction experience.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline font-bold font-serif">
              <h3>JobLens</h3>
            </div>
            <div className="text-sm font-serif font-bold mb-1">Role: Product Prototype</div>
            <ul className="list-disc pl-5 text-sm font-sans space-y-0.5">
              <li>Identified job-search friction faced by students and early-career candidates when navigating large numbers of job listings.</li>
              <li>Designed a job discovery experience focused on relevant opportunities and simplified search.</li>
              <li>Defined core MVP features around job search, filtering, and relevance.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline font-bold font-serif">
              <h3>Mango Farmer Token System</h3>
            </div>
            <div className="text-sm font-serif font-bold mb-1">Role: Product Prototype</div>
            <ul className="list-disc pl-5 text-sm font-sans space-y-0.5">
              <li>Identified the need for a more organized token and queue-management process between mango farmers and factory staff.</li>
              <li>Designed an app-based workflow to simplify token management and improve process visibility for farmers.</li>
              <li>Focused on a simple user experience suitable for users with varying levels of technical familiarity.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline font-bold font-serif">
              <h3>CashKaro Product Teardown</h3>
            </div>
            <div className="text-sm font-serif font-bold mb-1">Role: Product Thinking / PRD</div>
            <ul className="list-disc pl-5 text-sm font-sans space-y-0.5">
              <li>Analyzed new-user discovery and product-level value communication to identify opportunities to improve customer acquisition and conversion.</li>
              <li>Proposed clearer product-specific savings messaging, improved deal discovery, and stronger first-time-user value communication.</li>
              <li>Structured recommendations using observation, problem, hypothesis, proposed solution, and expected impact.</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-lg font-bold font-serif uppercase border-b-2 border-black mb-2">EDUCATION</h2>
          
          <div className="mb-2">
            <div className="flex justify-between items-baseline font-bold font-serif text-sm">
              <h4>The Apollo University</h4>
              <span>Sept 2022 – Apr 2026</span>
            </div>
            <div className="flex justify-between items-baseline text-sm font-sans">
              <span>B.Tech in Computer Science & Engineering</span>
              <span>CGPA: 7.17</span>
            </div>
          </div>
          
          <div className="mb-2">
            <div className="flex justify-between items-baseline font-bold font-serif text-sm">
              <h4>Govt. Jr. College, Vadamalapet</h4>
              <span>Mar 2020 – Aug 2022</span>
            </div>
            <div className="flex justify-between items-baseline text-sm font-sans">
              <span>Intermediate</span>
              <span>542 marks</span>
            </div>
          </div>

          <div className="mb-2">
            <div className="flex justify-between items-baseline font-bold font-serif text-sm">
              <h4>Camford English High School, Chittoor</h4>
              <span>Apr 2008 – May 2020</span>
            </div>
            <div className="flex justify-between items-baseline text-sm font-sans">
              <span>SSC</span>
              <span>416 marks</span>
            </div>
          </div>
        </div>

        {/* Languages Known */}
        <div className="mb-6">
          <h2 className="text-lg font-bold font-serif uppercase border-b-2 border-black mb-2">LANGUAGES KNOWN</h2>
          <p className="text-sm font-sans">English &bull; Telugu &bull; Hindi &bull; Tamil</p>
        </div>

        {/* Clubs & Leadership */}
        <div className="mb-6">
          <h2 className="text-lg font-bold font-serif uppercase border-b-2 border-black mb-2">CLUBS & LEADERSHIP</h2>
          
          <div className="mb-2">
            <div className="font-bold font-serif text-sm mb-0.5">NSS (2022 – 2026) — Coordinator & Member</div>
            <ul className="list-disc pl-5 text-sm font-sans space-y-0.5">
              <li>Led student groups in community outreach and environmental campaigns.</li>
              <li>Facilitated collaboration between university administration and student volunteers.</li>
            </ul>
          </div>

          <div className="mb-2">
            <div className="font-bold font-serif text-sm mb-0.5">Echo Club (2024 – 2025) — Member</div>
            <ul className="list-disc pl-5 text-sm font-sans space-y-0.5">
              <li>Participated in sustainability initiatives and eco-friendly campus activities.</li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-6">
          <h2 className="text-lg font-bold font-serif uppercase border-b-2 border-black mb-2">CERTIFICATIONS</h2>
          <div className="text-sm font-sans space-y-1">
            <div className="flex justify-between">
              <span>&bull; Product Management Professional Certificate (LinkedIn Learning)</span>
              <span>May 27, 2026</span>
            </div>
            <div className="flex justify-between">
              <span>&bull; IBM Data Fundamentals</span>
              <span>Dec 2025</span>
            </div>
            <div className="flex justify-between">
              <span>&bull; Acquiring Data – AI Fundamentals</span>
              <span>Nov 2024</span>
            </div>
            <div className="flex justify-between">
              <span>&bull; Google Cloud Computing Foundations</span>
              <span>Dec 2023</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
