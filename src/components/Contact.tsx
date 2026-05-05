/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 lg:p-20 text-white relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build the <br /><span className="text-blue-400">next big thing</span> together.</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Whether you're looking for product advice, AI implementation, or just a chat about product thinking, I'm always open to connecting.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail size={20} className="text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-lg font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone size={20} className="text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Call</p>
                  <p className="text-lg font-medium">{PERSONAL_INFO.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-lg font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Linkedin size={20} className="text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">LinkedIn</p>
                  <p className="text-lg font-medium">{PERSONAL_INFO.linkedin}</p>
                </div>
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-8">Send a Quick Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <textarea 
                placeholder="How can I help you?" 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-500/20">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
