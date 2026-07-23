import React from 'react';

export const whatsappSlides = [
  {
    id: 1,
    title: "Cover Page",
    category: "Cover",
    render: ({ navigate, onClose }: any) => (
      <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 text-center max-w-4xl mx-auto space-y-6">
        <span className="font-mono text-xs text-brand uppercase tracking-[0.3em] font-extrabold px-3 py-1 bg-brand/10 rounded-full inline-block mx-auto mb-8">
          A Product Management Case Study
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-bg uppercase tracking-tighter leading-tight mb-8">
          AI WhatsApp <br /><span className="text-brand">Ordering Agent</span>
        </h1>
        <div className="h-1 w-24 bg-brand/50 mx-auto rounded-full mb-12" />
        
        <div className="w-full border border-text-main/20 rounded-2xl bg-white/5 mt-8 text-left flex flex-col divide-y divide-white/10 text-gray-300 font-mono text-xs md:text-sm">
          <div className="flex flex-col md:flex-row"><div className="p-4 font-semibold text-bg md:w-1/4 md:border-r border-white/10 opacity-70">Role</div><div className="p-4 flex-1">Product Builder | AI Automation & Product Management</div></div>
          <div className="flex flex-col md:flex-row"><div className="p-4 font-semibold text-bg md:w-1/4 md:border-r border-white/10 opacity-70">Project Context</div><div className="p-4 flex-1">agentroomai</div></div>
          <div className="flex flex-col md:flex-row"><div className="p-4 font-semibold text-bg md:w-1/4 md:border-r border-white/10 opacity-70">Platform</div><div className="p-4 flex-1">WhatsApp</div></div>
          <div className="flex flex-col md:flex-row"><div className="p-4 font-semibold text-bg md:w-1/4 md:border-r border-white/10 opacity-70">Tools</div><div className="p-4 flex-1">n8n • WhatsApp API • OpenAI API • Conversation Memory</div></div>
        </div>
        
        <div className="mt-12 text-left bg-white/5 border-l-4 border-brand p-6 md:p-8 text-sm md:text-lg text-gray-300 leading-relaxed font-normal">
          I designed and built an AI-powered WhatsApp agent that enables customers to interact with restaurants through natural language. Customers can ask questions, place orders, and receive confirmations without requiring a staff member to manually handle every conversation.
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Discovery & Problem",
    category: "Discovery",
    render: ({ navigate, onClose }: any) => (
      <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">01. Discovery</h2>
        <h3 className="text-xl text-brand font-medium mb-4">Why did I explore this problem?</h3>
        <p className="text-bg/80 text-base md:text-lg leading-relaxed mb-6 font-normal">
          Many small restaurants already use WhatsApp as a communication channel. However, the platform is often managed manually. A typical customer journey involves a customer sending a message, waiting for a staff response, explaining an order, and waiting again for confirmation.
        </p>
        <p className="text-bg/80 text-base md:text-lg leading-relaxed mb-8 font-normal">
          The opportunity was to use WhatsApp as the existing customer interface while automating repetitive communication and order-processing tasks in the background.
        </p>
        <div className="bg-white/5 border border-brand/30 p-6 rounded-2xl mb-12">
          <p className="text-bg text-lg font-medium">
            The key insight: the problem was not that restaurants lacked a communication channel; the problem was that too much of the communication process was manual.
          </p>
        </div>

        <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">02. The Problem</h2>
        <p className="text-bg/80 text-base md:text-lg leading-relaxed mb-6 font-normal">
          Restaurants frequently receive repetitive customer messages such as menu questions, price queries, order requests, and follow-up questions. When these conversations are handled manually, the process becomes slow and operationally expensive.
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span><strong className="text-bg">Response delay:</strong> Staff may not respond immediately during busy periods.</span>
          </li>
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span><strong className="text-bg">Manual order processing:</strong> Staff must read, interpret, and forward order details.</span>
          </li>
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span><strong className="text-bg">Repetitive communication:</strong> Similar questions are answered repeatedly.</span>
          </li>
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span><strong className="text-bg">Information loss:</strong> Important details can be missed in long conversations.</span>
          </li>
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span><strong className="text-bg">Operational dependency:</strong> The customer experience depends entirely on staff availability.</span>
          </li>
        </ul>
        <div className="bg-brand/10 border-l-4 border-brand p-6">
          <p className="text-brand text-lg md:text-xl font-medium">
            How might we enable customers to communicate with a restaurant naturally through WhatsApp while reducing the manual effort required to handle queries and orders?
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Users & Pain Points",
    category: "Users",
    render: ({ navigate, onClose }: any) => (
      <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">03. Users</h2>
        <h3 className="text-xl text-brand font-medium mb-4">Primary Users</h3>
        <ul className="space-y-6 mb-12">
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span><strong className="text-bg">Customers:</strong> People who want to ask questions, view menu information, place orders, specify quantities, and receive confirmation.</span>
          </li>
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span><strong className="text-bg">Restaurant owners and staff:</strong> People who want to receive structured order details and reduce repetitive communication.</span>
          </li>
        </ul>

        <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">04. User Pain Points</h2>
        <h3 className="text-xl text-brand font-medium mb-4">Before the product:</h3>
        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 mb-6 font-mono text-sm md:text-base text-gray-300">
          Customer sends message → Staff reads message → Staff replies → Customer explains order → Staff manually interprets order → Staff confirms order
        </div>
        <ul className="space-y-4 mb-12">
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span>Customers may experience delays before receiving a response.</span>
          </li>
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span>Staff spend time handling repetitive questions.</span>
          </li>
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span>Order details need to be manually interpreted and forwarded.</span>
          </li>
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span>The process becomes difficult to manage when multiple customers message simultaneously.</span>
          </li>
        </ul>

        <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">05. Product Opportunity</h2>
        <p className="text-bg/80 text-base md:text-lg leading-relaxed mb-6 font-normal">
          Instead of forcing customers to download a new application, I used a platform they already understand: WhatsApp.
        </p>
        <div className="bg-brand/10 border-l-4 border-brand p-6">
          <p className="text-brand text-lg md:text-xl font-medium">
            Product opportunity: Use conversational AI to transform WhatsApp from a simple messaging channel into an automated ordering and customer-support interface.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "The Solution",
    category: "Solution",
    render: ({ navigate, onClose }: any) => (
      <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">06. The Solution</h2>
        <p className="text-bg/80 text-base md:text-lg leading-relaxed mb-6 font-normal">
          I built an AI-powered WhatsApp agent that can understand natural-language messages and route them through an automated workflow.
        </p>
        <div className="flex flex-col gap-4 mb-8">
          {[
            "Understand natural-language messages.",
            "Identify user intent.",
            "Answer general questions.",
            "Maintain conversation context through memory.",
            "Identify order-related messages.",
            "Extract item names and quantities.",
            "Notify the restaurant owner.",
            "Send order confirmations to customers."
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 text-bg/80 text-base font-normal items-start">
              <span className="text-brand font-bold mt-1">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p className="text-bg/80 text-base md:text-lg leading-relaxed mb-12 font-normal">
          The system uses a workflow-based architecture where each stage performs a specific function. This makes the system modular and easier to modify as new requirements emerge.
        </p>

        <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">07. How the Product Works</h2>
        <div className="w-full border border-text-main/20 rounded-2xl bg-white/5 mb-8 text-left flex flex-col divide-y divide-white/10 text-gray-300 font-mono text-sm md:text-base">
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="text-brand font-bold w-6">1</div><div className="font-bold text-bg md:w-1/4">WhatsApp Trigger</div><div className="flex-1 text-gray-400">Receives the customer's message.</div></div>
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="text-brand font-bold w-6">2</div><div className="font-bold text-bg md:w-1/4">AI Agent</div><div className="flex-1 text-gray-400">Understands the request and identifies intent.</div></div>
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="text-brand font-bold w-6">3</div><div className="font-bold text-bg md:w-1/4">Conversation Memory</div><div className="flex-1 text-gray-400">Maintains relevant context from previous interactions.</div></div>
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="text-brand font-bold w-6">4</div><div className="font-bold text-bg md:w-1/4">Order Parser</div><div className="flex-1 text-gray-400">Extracts items, quantities, and order details.</div></div>
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="text-brand font-bold w-6">5</div><div className="font-bold text-bg md:w-1/4">Decision Logic</div><div className="flex-1 text-gray-400">Determines whether the message is an order or a general query.</div></div>
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="text-brand font-bold w-6">6</div><div className="font-bold text-bg md:w-1/4">Owner Notification</div><div className="flex-1 text-gray-400">Sends structured order information to the restaurant.</div></div>
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="text-brand font-bold w-6">7</div><div className="font-bold text-bg md:w-1/4">Customer Confirmation</div><div className="flex-1 text-gray-400">Confirms the order back to the customer.</div></div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Features & Decisions",
    category: "Features",
    render: ({ navigate, onClose }: any) => (
      <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">08. Core Product Features</h2>
        <div className="w-full border border-text-main/20 rounded-2xl bg-white/5 mb-12 text-left flex flex-col divide-y divide-white/10 text-gray-300 text-sm md:text-base">
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="font-bold text-bg md:w-1/3">Natural-Language Interaction</div><div className="flex-1 text-gray-400">Customers can communicate naturally rather than following rigid commands.</div></div>
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="font-bold text-bg md:w-1/3">AI-Powered Query Handling</div><div className="flex-1 text-gray-400">The agent interprets questions and generates relevant responses.</div></div>
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="font-bold text-bg md:w-1/3">Conversation Memory</div><div className="flex-1 text-gray-400">Previous interactions can be used to maintain context.</div></div>
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="font-bold text-bg md:w-1/3">Order Parsing</div><div className="flex-1 text-gray-400">Unstructured messages are converted into structured order information.</div></div>
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="font-bold text-bg md:w-1/3">Automated Notifications</div><div className="flex-1 text-gray-400">Restaurant owners receive order details without manually monitoring every conversation.</div></div>
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="font-bold text-bg md:w-1/3">Customer Confirmation</div><div className="flex-1 text-gray-400">Customers receive immediate feedback after order processing.</div></div>
        </div>

        <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">09. Product Decisions</h2>
        <ul className="space-y-6 mb-8">
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span><strong className="text-bg">Use WhatsApp as the interface:</strong> Reduce adoption friction by using a platform customers already know.</span>
          </li>
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span><strong className="text-bg">Use natural language:</strong> Customers should not need to learn commands or rigid formats.</span>
          </li>
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span><strong className="text-bg">Separate intent detection from order processing:</strong> A general question should not trigger the order workflow.</span>
          </li>
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span><strong className="text-bg">Use structured order extraction:</strong> Convert conversational messages into actionable data.</span>
          </li>
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span><strong className="text-bg">Include conversation memory:</strong> Improve continuity and reduce the need for customers to repeat information.</span>
          </li>
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span><strong className="text-bg">Notify the owner:</strong> Automation should support restaurant operations rather than create a disconnected chatbot.</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 6,
    title: "Validation & Impact",
    category: "Validation",
    render: ({ navigate, onClose }: any) => (
      <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">10. Testing & Validation</h2>
        <p className="text-bg/80 text-base md:text-lg leading-relaxed mb-6 font-normal">
          The system was tested with different types of inputs, including general queries, menu-related questions, order messages, incomplete inputs, and multiple interactions.
        </p>
        <div className="flex flex-col gap-4 mb-12">
          {[
            "General queries received relevant responses.",
            "Order messages were processed by extracting item names and quantities.",
            "Order confirmations were sent to customers.",
            "Restaurant owners were notified with order details.",
            "Multiple interactions were tested to evaluate system stability.",
            "Unclear or incomplete messages exposed areas where future improvements were required."
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 text-bg/80 text-base font-normal">
              <span className="text-brand font-bold mt-1">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">11. Business & User Impact</h2>
        <p className="text-bg/80 text-base md:text-lg leading-relaxed mb-6 font-normal">
          The product was designed to reduce manual effort and improve response speed. By automating repetitive conversations and order-processing steps, the system can help restaurants handle more customer interactions without increasing the same level of manual workload.
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span>Faster customer responses.</span>
          </li>
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span>Reduced repetitive communication for staff.</span>
          </li>
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span>More structured order processing.</span>
          </li>
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span>Improved consistency in customer interactions.</span>
          </li>
          <li className="flex gap-3 text-bg/80 text-base md:text-lg font-normal">
            <span className="text-brand font-bold mt-1">•</span>
            <span>A scalable foundation for future restaurant automation.</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 7,
    title: "Learnings & Roadmap",
    category: "Conclusion",
    render: ({ navigate, onClose }: any) => (
      <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="flex flex-col gap-12 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bg uppercase tracking-tight mb-8">12. Challenges</h2>
            <ul className="space-y-6">
              <li className="flex gap-3 text-bg/80 text-base font-normal">
                <span className="text-brand font-bold mt-1">•</span>
                <span><strong className="text-bg">Ambiguous user messages:</strong> Customers do not always provide complete or clearly structured information.</span>
              </li>
              <li className="flex gap-3 text-bg/80 text-base font-normal">
                <span className="text-brand font-bold mt-1">•</span>
                <span><strong className="text-bg">Context management:</strong> The system needs relevant conversation history to respond correctly.</span>
              </li>
              <li className="flex gap-3 text-bg/80 text-base font-normal">
                <span className="text-brand font-bold mt-1">•</span>
                <span><strong className="text-bg">Workflow reliability:</strong> Every stage must pass accurate data to the next stage.</span>
              </li>
              <li className="flex gap-3 text-bg/80 text-base font-normal">
                <span className="text-brand font-bold mt-1">•</span>
                <span><strong className="text-bg">Human handoff:</strong> Automation should not eliminate the need for human intervention when a request is complex or unclear.</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bg uppercase tracking-tight mb-8">13. What I Learned</h2>
            <ul className="space-y-4">
              {[
                "A good product begins with a real operational problem, not with technology.",
                "The best interface is often the one users already understand.",
                "AI is most useful when connected to a specific workflow and business outcome.",
                "Automation should reduce friction for both the customer and the business.",
                "Building the product helped me understand how user needs, workflow design, AI capabilities, and business operations connect."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-bg/80 text-base font-normal">
                  <span className="text-brand font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-bold text-bg uppercase tracking-tight mb-8">14. Future Roadmap</h2>
        <div className="w-full border border-text-main/20 rounded-2xl bg-white/5 mb-12 text-left flex flex-col divide-y divide-white/10 text-gray-300 text-sm md:text-base">
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="font-bold text-bg md:w-1/4 opacity-70">Phase 1</div><div className="flex-1 text-gray-400">Payments and order status tracking</div></div>
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="font-bold text-bg md:w-1/4 opacity-70">Phase 2</div><div className="flex-1 text-gray-400">Database integration and order history</div></div>
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="font-bold text-bg md:w-1/4 opacity-70">Phase 3</div><div className="flex-1 text-gray-400">Multilingual conversations</div></div>
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="font-bold text-bg md:w-1/4 opacity-70">Phase 4</div><div className="flex-1 text-gray-400">Voice-based ordering</div></div>
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="font-bold text-bg md:w-1/4 opacity-70">Phase 5</div><div className="flex-1 text-gray-400">Restaurant analytics and customer insights</div></div>
          <div className="flex flex-col md:flex-row p-4 gap-2 md:gap-4"><div className="font-bold text-bg md:w-1/4 opacity-70">Phase 6</div><div className="flex-1 text-gray-400">Expansion into other service businesses</div></div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "Conclusion",
    category: "Wrap Up",
    render: ({ navigate, onClose }: any) => (
      <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">15. My Role</h2>
        <p className="text-bg/80 text-base md:text-lg leading-relaxed mb-6 font-normal">
          I worked across the product lifecycle—from identifying the operational problem and defining the user flow to designing the automation workflow, connecting the AI model, configuring the WhatsApp interaction, structuring order extraction, testing different scenarios, and identifying future product opportunities.
        </p>
        <div className="bg-brand/10 border-l-4 border-brand p-8 mb-12 rounded-xl">
          <p className="text-brand text-lg md:text-xl font-medium leading-relaxed">
            This project demonstrates my ability to think beyond building a technical system: I focused on the user problem, the operational workflow, the product experience, and how AI could create measurable value.
          </p>
        </div>

        <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">16. Final Takeaway</h2>
        <p className="text-bg/80 text-base md:text-lg leading-relaxed mb-6 font-normal">
          This project started as an AI automation solution for WhatsApp-based communication. However, the deeper product opportunity was larger: businesses already have customers, communication channels, and repetitive workflows. AI can connect these elements and automate the parts of the experience that do not require human judgment.
        </p>
        <p className="text-bg/80 text-base md:text-lg leading-relaxed mb-12 font-normal">
          The project demonstrates my interest in building AI-powered products that solve practical business problems through simple, familiar user experiences.
        </p>
        
        <div className="pt-8 border-t border-white/10 text-center space-y-2 mt-auto">
          <p className="text-bg/60 text-xs md:text-sm font-mono uppercase tracking-widest font-normal">Project: AI-Based WhatsApp Agent for Automated Communication and Support</p>
          <p className="text-bg/60 text-xs md:text-sm font-mono uppercase tracking-widest font-normal">V. ESSESSVI • AI Workflow Engineer • agentroomai</p>
        </div>
      </div>
    )
  }
];
