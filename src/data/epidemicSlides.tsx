import React from 'react';
import { ArrowRight, Award, BookOpen, ChevronRight, Cpu, Database, GraduationCap, HelpCircle, Layers, MapPin, Network, Sliders, User } from 'lucide-react';

  export const epidemicSlides = [
    {
      id: 1,
      title: "Cover Page",
      category: "Thesis presentation",
      render: ({ navigate, onClose }: any) => (
        <div className="flex flex-col justify-between min-h-full py-12 px-6 md:px-12 text-center relative">
          <div className="absolute right-4 top-4 opacity-10 font-mono text-[9px] uppercase tracking-widest text-right">
            The Apollo University <br /> School of Technology
          </div>
          
          <div className="my-auto space-y-8">
            <span className="font-mono text-xs text-brand uppercase tracking-[0.3em] font-extrabold px-3 py-1 bg-brand/10 rounded-full inline-block">
              Research Project Presentation
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-3.5xl xl:text-6xl font-display font-bold text-bg uppercase tracking-tighter leading-none">
              Predicting Epidemics{' '}
              <span className="text-brand">Data-Driven Health Forecasting System</span>
            </h1>
            <div className="h-1 w-24 bg-brand/50 mx-auto rounded-full" />
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Abstract",
      category: "project overview",
      render: ({ navigate, onClose }: any) => (
        <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-light font-light">Slide 2 / 18 — Executive Abstract</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">Executive Thesis Abstract</h2>
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 space-y-4 text-bg/60 text-sm md:text-base leading-relaxed  font-normal">
              <p>
                Epidemics pose a significant threat to global public health, making accurate forecasting essential for effective prevention and control.
              </p>
              <p>
                This project focuses on predicting epidemic trends using the <span className="text-brand">ARIMA</span> (AutoRegressive Integrated Moving Average) model, a widely used time-series forecasting technique.
              </p>
              <p>
                Historical epidemic data is collected and preprocessed to ensure consistency and stationarity before model implementation. Performance is evaluated using Mean Absolute Error (<span className="text-bg">MAE</span>) and Root Mean Square Error (<span className="text-bg">RMSE</span>).
              </p>
            </div>
            <div className="md:col-span-2 space-y-4">
              <div className="p-6 bg-white/5 border border-text-main/20 rounded-2xl">
                <span className="font-mono text-brand text-2xl font-bold block">90%+</span>
                <span className="text-[10px] text-bg/60 uppercase tracking-wider font-light block mt-1 font-normal">Short-term accuracy</span>
              </div>
              <div className="p-6 bg-white/5 border border-text-main/20 rounded-2xl">
                <span className="font-mono text-brand text-2xl font-bold block">ARIMA</span>
                <span className="text-[10px] text-bg/60 uppercase tracking-wider font-light block mt-1 font-normal">Mathematical Trend Forecast</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Introduction",
      category: "foundations",
      render: ({ navigate, onClose }: any) => (
        <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-light font-light">Slide 3 / 18 — Introduction</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-bg uppercase tracking-tight mb-8">Epidemic Forecasting Value</h2>
          
          <div className="mb-6 grid grid-cols-2 gap-4 font-mono text-xs uppercase tracking-wider">
            <div className="p-4 bg-white/5 rounded-xl border border-text-main/10">
              <span className="text-bg/40 block mb-1 font-normal">Project Domain</span>
              <span className="text-bg font-medium">Data Analytics & Predictive Systems</span>
            </div>
            <div className="p-4 bg-[#0F141F] rounded-xl border border-brand/20">
              <span className="text-bg/40 block mb-1 font-normal">Core Architecture</span>
              <span className="text-brand font-medium">ARIMA Time-Series Math</span>
            </div>
          </div>

          <div className="space-y-4 text-xs md:text-sm text-bg/60 font-light leading-relaxed">
            <div className="flex gap-4 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
              <p><strong className="text-bg">Rapid Epidemic Spread:</strong> Disease outbreaks disrupt global health networks, imposing huge burdens on clinical care, lives, and economic stability.</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
              <p><strong className="text-bg">Planning Tools:</strong> Data-driven prediction alerts healthcare organizations to plan bed counts, materials, and vaccination campaigns preemptively.</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
              <p><strong className="text-bg">Mathematical Simplicity:</strong> Utilizing statsmodels and mathematical ARIMA parameter controls maps reliable short-term trends cleanly.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Literature Review",
      category: "scientific review",
      render: ({ navigate, onClose }: any) => (
        <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 lg:px-16 w-full max-w-5xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-light font-light">Slide 4 / 18 — Comparative Models</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-bg uppercase tracking-tight mb-6">Literature Review of Systems</h2>
          
          <div className="overflow-x-auto custom-scrollbar border border-text-main/20 rounded-2xl bg-[#0a0a0d]">
            <table className="w-full text-left font-mono text-[9px] uppercase border-collapse">
              <thead>
                <tr className="bg-white/10 border-b border-text-main/20 text-bg/60 font-normal">
                  <th className="p-3 font-semibold">Model</th>
                  <th className="p-3 font-semibold">Type</th>
                  <th className="p-3 font-semibold">Advantages</th>
                  <th className="p-3 font-semibold">Limitations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300 font-normal">
                <tr>
                  <td className="p-3 text-bg font-medium">ARIMA</td>
                  <td className="p-3">Statistical</td>
                  <td className="p-3 text-green-400">Simple, easy to interpret, great for linear data.</td>
                  <td className="p-3 text-red-400">Cannot handle nonlinear patterns</td>
                </tr>
                <tr>
                  <td className="p-3 text-bg font-medium">SARIMA</td>
                  <td className="p-3">Statistical</td>
                  <td className="p-3 text-green-400">Handles seasonal variations effectively.</td>
                  <td className="p-3 text-red-400">Complex parameter tuning</td>
                </tr>
                <tr>
                  <td className="p-3 text-bg font-medium">SVM</td>
                  <td className="p-3">ML</td>
                  <td className="p-3 text-green-400">Works well on smaller, stable datasets.</td>
                  <td className="p-3 text-red-400">Not ideal for dynamic forecasting</td>
                </tr>
                <tr>
                  <td className="p-3 text-bg font-medium">Random Forest</td>
                  <td className="p-3">ML</td>
                  <td className="p-3 text-green-400">High accuracy, handles large complex datasets.</td>
                  <td className="p-3 text-red-400">Computationally expensive</td>
                </tr>
                <tr>
                  <td className="p-3 text-bg font-medium">LSTM</td>
                  <td className="p-3">Deep Learning</td>
                  <td className="p-3 text-green-400">Captures complex nonlinear patterns.</td>
                  <td className="p-3 text-red-400">Requires large training dataset & times</td>
                </tr>
                <tr>
                  <td className="p-3 text-bg font-medium">Prophet</td>
                  <td className="p-3">Additive</td>
                  <td className="p-3 text-green-400">Handles holidays and trends automatically.</td>
                  <td className="p-3 text-red-400">Limited flexible parameter bounds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Problem Statement",
      category: "problem definitions",
      render: ({ navigate, onClose }: any) => (
        <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-light font-light">Slide 5 / 18 — Mathematical Need</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">Deficiencies of Existing Systems</h2>
          
          <div className="grid md:grid-cols-3 gap-6 text-sm  font-normal">
            <div className="p-6 bg-red-950/15 border border-red-500/10 rounded-2xl space-y-4">
              <span className="text-red-400 font-mono text-xs font-light uppercase tracking-widest">Problem Definition</span>
              <p className="text-gray-300 font-normal">Outbreak predictive strategy is highly complex due to the dynamic, volatile, and uncertain nature of disease infection curves.</p>
            </div>
            <div className="p-6 bg-red-950/15 border border-red-500/10 rounded-2xl space-y-4">
              <span className="text-red-400 font-mono text-xs font-light uppercase tracking-widest">Existing Drawbacks</span>
              <p className="text-gray-300 font-normal">Traditional models suffer from inconsistent datasets, sudden spikes, and complete lack of nonlinear parsing.</p>
            </div>
            <div className="p-6 bg-green-950/15 border border-green-500/10 rounded-2xl space-y-4">
              <span className="text-brand font-mono text-xs font-light uppercase tracking-widest">Proposed Response</span>
              <p className="text-gray-300 font-normal">An optimized ARIMA-based time-series layout that establishes high-accuracy data quality checks to yield solid projections.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Objective",
      category: "tactical objectives",
      render: ({ navigate, onClose }: any) => (
        <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-3xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-light font-light">Slide 6 / 18 — Project Thesis Objectives</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-bg uppercase tracking-tight mb-8">System Engineering Objectives</h2>
          
          <div className="space-y-4 text-bg/60 text-xs md:text-sm font-light">
            {[
              "Design and develop a highly optimized epidemic forecasting engine using ARIMA.",
              "Improve forecasting stability through differencing, cleaning, and handling missing data rows.",
              "Verify the prediction quality through reliable standard evaluation measures like MAE and RMSE.",
              "Provide solid visual graph interfaces for public health policy and resource allocation."
            ].map((text, index) => (
              <div key={index} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-text-main/10 items-center">
                <span className="font-mono text-brand text-xs font-light pr-2 border-r border-brand/20">OB-0{index + 1}</span>
                <p className="text-gray-300 font-normal">{text}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Existing System",
      category: "limitations",
      render: ({ navigate, onClose }: any) => (
        <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-light font-light">Slide 7 / 18 — Legacy Drawbacks</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">Failures of Legacy Systems</h2>
          
          <div className="grid md:grid-cols-2 gap-6 leading-relaxed">
            <div className="p-6 bg-red-950/20 border border-red-500/10 rounded-2xl">
              <h3 className="text-red-400 font-mono text-xs font-light uppercase tracking-wider mb-2">Dataset Fragility</h3>
              <p className="text-bg/60 text-sm  font-normal">
                Over-dependence on inconsistent, delayed, or manual hospital datasets leads directly to unreliable trend forecasts.
              </p>
            </div>
            <div className="p-6 bg-red-950/20 border border-red-500/10 rounded-2xl">
              <h3 className="text-red-400 font-mono text-xs font-light uppercase tracking-wider mb-2">No Dynamic Adaptation</h3>
              <p className="text-bg/60 text-sm  font-normal">
                Absence of real-time pipeline differencing makes it difficult for traditional models to respond to volatile seasonal shifts.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Proposed System",
      category: "proposed system",
      render: ({ navigate, onClose }: any) => (
        <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-light font-light">Slide 8 / 18 — System Benefits</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">The ARIMA Predictive Approach</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono uppercase text-center">
            <div className="p-5 bg-white/5 border border-brand/20 rounded-xl space-y-2">
              <span className="text-brand font-medium block">1. Data Prep</span>
              <p className="text-[8px] text-bg/40 uppercase tracking-widest leading-normal font-normal">Clean outlier points & process null rows with Pandas.</p>
            </div>
            <div className="p-5 bg-white/5 border border-brand/20 rounded-xl space-y-2">
              <span className="text-bg font-medium block">2. Stationary Check</span>
              <p className="text-[8px] text-bg/40 uppercase tracking-widest leading-normal font-normal">Ensure stable mean/variance using differencing.</p>
            </div>
            <div className="p-5 bg-[#0F141F] border border-brand/30 rounded-xl space-y-2">
              <span className="text-brand font-medium block">3. Statsmodels Fits</span>
              <p className="text-[8px] text-bg/40 uppercase tracking-widest leading-normal font-normal">Optimize ARIMA parameters (p, d, q) instantly.</p>
            </div>
            <div className="p-5 bg-white/5 border border-brand/20 rounded-xl space-y-2">
              <span className="text-bg font-medium block">4. Projections</span>
              <p className="text-[8px] text-bg/40 uppercase tracking-widest leading-normal font-normal">Generate short-term graphs for resource planning.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "System Architecture",
      category: "flowchart diagram",
      render: ({ navigate, onClose }: any) => (
        <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto relative">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-light font-light">Slide 9 / 18 — Information Flowchart</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-bg uppercase tracking-tight mb-6">Epidemic Architecture Pipeline</h2>
          
          <div className="p-6 bg-[#0c0d12] border border-text-main/10 rounded-2xl space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-wider text-center">
              <div className="w-full md:w-1/4 p-3 bg-white/5 rounded-lg border border-text-main/20">
                <span className="text-brand font-medium block mb-1">Start & Input</span>
                <span className="text-[8px] text-bg/40 font-normal">Import CSV Dataset</span>
              </div>
              <div className="text-bg/40 hidden md:block font-normal">➔</div>
              <div className="w-full md:w-2/4 p-4 bg-white/10 rounded-lg border border-brand/20 space-y-2">
                <span className="text-bg font-medium block">Validating Data Check</span>
                <div className="flex justify-around text-[7px] text-bg/60 gap-2 font-normal">
                  <span className="bg-red-950/40 px-2 py-1 rounded text-red-400">If NO ➔ Re-import</span>
                  <span className="bg-green-950/40 px-2 py-1 rounded text-brand">If YES ➔ Proceed</span>
                </div>
              </div>
              <div className="text-bg/40 hidden md:block font-normal">➔</div>
              <div className="w-full md:w-1/4 p-3 bg-white/5 rounded-lg border border-text-main/20">
                <span className="text-brand font-medium block mb-1">ARIMA Model Creation</span>
                <span className="text-[8px] text-bg/40 font-normal">Statsmodels Training</span>
              </div>
            </div>

            <div className="h-[1px] w-full bg-white/5" />

            <div className="flex flex-col md:flex-row justify-around items-center gap-4 text-center font-mono text-[9px] uppercase tracking-widest">
              <div className="p-3 bg-white/5 rounded-xl border border-text-main/10">
                Data Split (Train / Test)
              </div>
              <div className="text-bg/40 hidden md:block font-normal">➔</div>
              <div className="p-3 bg-[#0F141F] rounded-xl border border-brand/20 text-brand font-medium">
                Fitting Models & Evaluation
              </div>
              <div className="text-bg/40 hidden md:block font-normal">➔</div>
              <div className="p-3 bg-white/5 rounded-xl border border-text-main/10">
                Output Predictions Graphs
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: "Methodology",
      category: "execution workflow",
      render: ({ navigate, onClose }: any) => (
        <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-light font-light">Slide 10 / 18 — Methodology</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-6">Workflow Chronology</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center text-sm font-normal">
            <div className="space-y-4 font-semibold">
              <h3 className="text-bg font-medium uppercase font-display tracking-tight text-xl">Operational Pipeline</h3>
              <ol className="list-decimal list-inside space-y-2 text-bg/60  leading-relaxed font-normal">
                <li>Retrieve epidemiological statistics from WHO repositories.</li>
                <li>Clean null items and convert indices to Pandas Datetime format.</li>
                <li>Difference values to guarantee stationary series.</li>
                <li>Fit auto-ARIMA solver to select optimal p, d, q integers.</li>
                <li>Partition into train (80%) and evaluate on test (20%).</li>
              </ol>
            </div>
            
            <div className="p-6 bg-white/5 border border-text-main/20 rounded-2xl space-y-4 font-mono">
              <h3 className="text-brand font-mono text-xs font-light uppercase tracking-wider block">Validations</h3>
              <p className="text-bg/60 text-[11px] leading-relaxed font-normal">
                Before fitting, an Augmented Dickey-Fuller (ADF) test is completed. If the p-value exceeds 0.05, differencing is iteratively applied (d=1, d=2).
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 11,
      title: "Technologies",
      category: "engineering stack",
      render: ({ navigate, onClose }: any) => (
        <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-light font-light">Slide 11 / 18 — Technologies</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">Science Tech Stack</h2>
          
          <div className="grid md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-6 bg-white/5 border border-text-main/20 rounded-2xl">
              <span className="text-brand uppercase font-light block mb-4 tracking-widest">Programming Language</span>
              <ul className="space-y-2 text-gray-300 font-normal">
                <li>✔ Python (Core computation)</li>
                <li>✔ Jupyter Notebooks (R&D)</li>
              </ul>
            </div>
            <div className="p-6 bg-[#0E131F] border border-brand/20 rounded-2xl">
              <span className="text-bg uppercase font-light block mb-4 tracking-widest">Computation Core</span>
              <ul className="space-y-2 text-gray-300 font-normal">
                <li>✔ Pandas (Data Frame strategy)</li>
                <li>✔ NumPy (Matrix calculations)</li>
                <li>✔ Statsmodels (Mathematical routines)</li>
              </ul>
            </div>
            <div className="p-6 bg-white/5 border border-text-main/20 rounded-2xl">
              <span className="text-brand uppercase font-light block mb-4 tracking-widest">Data Visualization</span>
              <ul className="space-y-2 text-gray-300 font-normal">
                <li>✔ Matplotlib (Plot generation)</li>
                <li>✔ Seaborn (Trend overlay charts)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 12,
      title: "Modules",
      category: "system modules",
      render: ({ navigate, onClose }: any) => (
        <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-light font-light">Slide 12 / 18 — Modularity</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">Decoupled Module Structure</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono uppercase text-center">
            <div className="p-4 bg-white/5 border border-text-main/10 rounded-xl space-y-1">
              <span className="text-brand font-light block text-[11px]">Data Collection</span>
              <p className="text-[8px] text-bg/40 lowercase leading-normal font-normal">Secures raw tables from WHO / health databases.</p>
            </div>
            <div className="p-4 bg-white/5 border border-text-main/10 rounded-xl space-y-1">
              <span className="text-bg font-light block text-[11px]">Preprocessing</span>
              <p className="text-[8px] text-bg/40 lowercase leading-normal font-normal">Deletes null artifacts and structures indexing.</p>
            </div>
            <div className="p-4 bg-white/5 border border-text-main/10 rounded-xl space-y-1">
              <span className="text-brand font-light block text-[11px]">Time-Series Conversion</span>
              <p className="text-[8px] text-bg/40 lowercase leading-normal font-normal">Converts dataset into time-based formats.</p>
            </div>
            <div className="p-4 bg-[#0F141F] border border-brand/25 rounded-xl space-y-1">
              <span className="text-bg font-light block text-[11px]">Model Implementation</span>
              <p className="text-[8px] text-bg/40 lowercase leading-normal font-normal">Applies ARIMA algorithm for model forecasting.</p>
            </div>
            <div className="p-4 bg-[#0F141F] border border-brand/25 rounded-xl space-y-1">
              <span className="text-brand font-light block text-[11px]">Training & Testing</span>
              <p className="text-[8px] text-bg/40 lowercase leading-normal font-normal">Trains based on historical cases values.</p>
            </div>
            <div className="p-4 bg-white/5 border border-text-main/10 rounded-xl space-y-1">
              <span className="text-bg font-light block text-[11px]">Visualization Module</span>
              <p className="text-[8px] text-bg/40 lowercase leading-normal font-normal">Displays outcome charts and confidence lines.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 13,
      title: "Implementation",
      category: "code execution",
      render: ({ navigate, onClose }: any) => (
        <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-light font-light">Slide 13 / 18 — Mathematical Implementation</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-bg uppercase tracking-tight mb-8">Logical Code Pipeline</h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-sm  font-normal">
            <div className="space-y-4">
              <p className="text-bg/60 font-normal">
                The time-series dataset of epidemic numbers was preprocessed using the <span className="text-bg">Pandas</span> library. 
              </p>
              <p className="text-bg/60 font-normal">
                Stationarity was achieved through consecutive differencing intervals. The mathematical model architecture of the statistical ARIMA is calculated as:
              </p>
              <div className="p-4 bg-[#0F141F] rounded-xl border border-brand/20 font-mono text-[10px] text-brand text-center">
                Y_t = c + φ₁Y_(t-1) + ... + φ_p Y_(t-p) + θ₁e_(t-1) + ... + θ_q e_(t-q) + e_t
              </div>
            </div>
            
            <div className="p-6 bg-white/5 border border-text-main/20 rounded-2xl font-mono text-xs space-y-2">
              <span className="text-brand uppercase font-light block mb-2 text-[10px]">Python Snippet Outline</span>
              <div className="text-bg/60 leading-normal lowercase text-[9px] font-normal">
                <span className="text-brand">import</span> pandas <span className="text-brand">as</span> pd<br />
                <span className="text-bg">df = pd.read_csv('epidemic.csv')</span><br />
                <span className="text-bg">df['cases_diff'] = df['cases'].diff().dropna()</span><br />
                <span className="text-brand">from</span> statsmodels.tsa.arima.model <span className="text-brand font-medium">import</span> ARIMA<br />
                <span className="text-bg">model = ARIMA(df['cases'], order=(1,1,1)).fit()</span><br />
                <span className="text-bg">forecast = model.forecast(steps=30)</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 14,
      title: "Outputs",
      category: "live outcomes data",
      render: ({ navigate, onClose }: any) => (
        <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 w-full max-w-5xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-2 font-light font-light">Slide 14 / 18 — Live Math Output Graphs</span>
          <h2 className="text-xl md:text-2xl font-display font-medium text-bg uppercase tracking-tight mb-4">Actual vs forecasted curves</h2>
          
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Chart column */}
            <div className="md:col-span-2 bg-[#08080c] border border-text-main/20 rounded-2xl p-4 h-[240px] relative overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between items-center text-[10px] font-mono text-bg/40 uppercase font-normal">
                <span>Observed vs ARIMA Forecast</span>
                <div className="flex gap-4">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500 block" /> Observed</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-100 block" /> Forecasted</span>
                </div>
              </div>
              
              {/* Simulated vector chart */}
              <div className="h-40 w-full relative flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50">
                  {/* Grid lines */}
                  <line x1="0" y1="10" x2="100" y2="10" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="2,2" />
                  <line x1="0" y1="25" x2="100" y2="25" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="2,2" />
                  <line x1="0" y1="40" x2="100" y2="40" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="2,2" />
                  
                  {/* Confidence intervals background */}
                  <path d="M 0 45 Q 25 35, 50 15 T 100 5 L 100 25 T 50 35 Q 25 45, 0 49 Z" fill="rgba(249, 115, 22, 0.15)" />
                  {/* Observed Cases line */}
                  <path d="M 0 47 Q 20 38, 40 18 T 80 12 T 100 8" fill="none" stroke="#3b82f6" strokeWidth="2" />
                  {/* Forecasted Line */}
                  <path d="M 0 47 Q 20 38, 40 18 T 80 14 T 100 11" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="3,1" />
                  
                  {/* Visual points */}
                  <circle cx="100" cy="8" r="2.5" fill="#3b82f6" />
                  <circle cx="100" cy="11" r="2.5" fill="#f97316" />
                </svg>
                <div className="absolute left-0 bottom-0 text-[8px] text-bg/40 font-mono font-normal">Jan 2020</div>
                <div className="absolute right-0 bottom-0 text-[8px] text-bg/40 font-mono  font-normal">Sep 2020</div>
              </div>
            </div>

            {/* Metrics Column */}
            <div className="space-y-4">
              <div className="p-3 bg-white/5 border border-text-main/20 rounded-xl">
                <span className="font-mono text-bg/60 text-[9px] uppercase block mb-1 font-normal">Mean Absolute Error (MAE)</span>
                <span className="font-mono text-brand text-xl font-medium block">45.32</span>
              </div>
              <div className="p-3 bg-white/5 border border-text-main/20 rounded-xl">
                <span className="font-mono text-bg/60 text-[9px] uppercase block mb-1 font-normal">Root Mean Square Error (RMSE)</span>
                <span className="font-mono text-brand text-xl font-medium block font-sans">60.78</span>
              </div>
              <div className="p-3 bg-green-950/20 border border-green-500/10 rounded-xl">
                <span className="font-mono text-green-400 text-[9px] uppercase block mb-1">Interpretation</span>
                <p className="text-[9px] text-gray-300 font-light uppercase leading-tight font-normal">Highly reliable short-term forecasting on stable epidemic trends.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 15,
      title: "Future Scope",
      category: "future roadmap",
      render: ({ navigate, onClose }: any) => (
        <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-light font-light">Slide 15 / 18 — Future Scope</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">Epidemic Forecasting Roadmap</h2>
          
          <div className="grid md:grid-cols-2 gap-6 leading-relaxed">
            <div className="p-6 bg-white/5 border border-text-main/20 rounded-2xl">
              <h3 className="text-brand font-mono text-xs font-light uppercase tracking-wider mb-2">Hybrid LSTM Model Fusion</h3>
              <p className="text-bg/60 text-sm  font-normal">
                Integrate deep-learning LSTM models with standard ARIMA to handle non-linear volatility, environmental policies, and dynamic epidemic spikes effectively.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-text-main/20 rounded-2xl">
              <h3 className="text-bg font-mono text-xs font-light uppercase tracking-wider mb-2">Real-Time Dashboards</h3>
              <p className="text-bg/60 text-sm  font-normal">
                Establish direct public datasets interfaces connecting WHO APIs to update ARIMA parameters model automatically and render web dashboard maps for public medical agencies.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 16,
      title: "Conclusion",
      category: "thesis summary",
      render: ({ navigate, onClose }: any) => (
        <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-light font-light">Slide 16 / 18 — Summary Conclusion</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase tracking-tight mb-8">Analytical Projections Summary</h2>
          <div className="p-8 bg-white/5 border-l-4 border-brand rounded-r-2xl space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed font-medium">
              "The design successfully implements the ARIMA statistical model to predict epidemic curves with a high level of confidence for short-term outbreak prevention."
            </p>
            <p className="text-bg/60 text-sm  leading-relaxed font-normal">
              Data preprocessing and stationarity remain the most critical components of predictive reliability. While ARIMA is excellent for linear dependencies, future architectures must evaluate hybrid deep learning to capture volatile global health patterns.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 17,
      title: "References",
      category: "bibliography",
      render: ({ navigate, onClose }: any) => (
        <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-light font-light">Slide 17 / 18 — Scholarly Citations</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-bg uppercase tracking-tight mb-6">Academic References</h2>
          
          <ul className="space-y-3 font-mono text-[9px] md:text-xs text-bg/60 leading-normal uppercase">
            <li>
              <span className="text-brand font-medium">[1]</span> G. E. P. Box, G. M. Jenkins, and G. C. Reinsel, <span className="text-bg font-semibold">"Time Series Analysis: Forecasting and Control"</span>, 5th ed. Wiley, 2015.
            </li>
            <li>
              <span className="text-brand font-medium">[2]</span> R. J. Hyndman and G. Athanasopoulos, <span className="text-bg font-semibold">"Forecasting: Principles and Practice"</span>, 2nd ed. OTexts, 2018.
            </li>
            <li>
              <span className="text-brand font-medium">[3]</span> World Health Organization, <span className="text-bg font-semibold">"Coronavirus Disease (COVID-19) Dashboard"</span>, 2020.
            </li>
            <li>
              <span className="text-brand font-medium">[4]</span> Johns Hopkins University, <span className="text-bg font-semibold">"COVID-19 Data Repository by CSSE"</span>, 2020.
            </li>
            <li>
              <span className="text-brand font-medium">[5]</span> G. Zhang, B. E. Patuwo, and M. Y. Hu, <span className="text-bg font-semibold">"Forecasting with artificial neural networks"</span>, Int. Journal of Forecasting, vol. 14, 1998.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 18,
      title: "Conclusion",
      category: "acknowledgments",
      render: ({ navigate, onClose }: any) => (
        <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 text-center max-w-3xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-[0.3em] block mb-6 font-light font-light">Slide 18 / 18 — End</span>
          <h2 className="text-5xl md:text-8xl font-display font-bold text-brand uppercase tracking-tighter leading-none mb-6">Thank You!</h2>
          <p className="text-bg/60 text-lg font-medium leading-relaxed mb-12">
            Presenting the computer science epidemic trend forecasting research workflow.
          </p>
          <div className="flex justify-center gap-6">
            <button 
              onClick={() => {
                onClose();
                navigate('/connect');
              }}
              className="px-10 py-5 bg-white text-bg font-display font-light text-xs uppercase tracking-[0.2em] rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              Discuss Research Outlines
            </button>
          </div>
        </div>
      )
    }
  ];
