import React from 'react'

const Support = () => {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="relative py-24 px-4 bg-slate-950/20 mb-20 text-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            ELVATE <span className="text-primary italic">SUPPORT</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Technical resources, drivers, and global assistance at your fingertips. We ensure your hardware performs at peak efficiency.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">call</span> 9631028482</div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">mail</span> elvate1009@gmail.com</div>
          </div>

        </div>
        <div className="absolute inset-0 liquid-gradient opacity-10 -z-10"></div>
      </section>

      {/* Quick Links */}
      <section className="px-4 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "download", title: "Drivers & Software", desc: "Get the latest firmware and management software for your Elvate hardware." },
            { icon: "menu_book", title: "Product Manuals", desc: "Installation guides and technical documentation for all retail components." },
            { icon: "verified", title: "Warranty Status", desc: "Check your product coverage and register new hardware for elite support." }
          ].map((item, i) => (
            <div key={i} className="glass-card p-10 rounded-3xl group hover:border-primary/50 transition-all cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">{item.desc}</p>
              <div className="text-primary font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Access Resource <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & FAQ */}
      <section className="px-4 mb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="glass-card p-12 rounded-[2.5rem] border-white/5">
            <h2 className="text-3xl font-bold mb-8 italic">Contact Technical <span className="text-primary">Consulting</span></h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors" type="text" placeholder="John Doe"/>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors" type="email" placeholder="john@example.com"/>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors appearance-none">
                  <option className="bg-background-dark">Technical Support</option>
                  <option className="bg-background-dark">Bulk Sales Inquiry</option>
                  <option className="bg-background-dark">Warranty Claim</option>
                  <option className="bg-background-dark">Hardware Configuration</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Message</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors h-40" placeholder="How can our engineers help you?"></textarea>
              </div>
              <button className="w-full bg-primary text-background-dark font-black py-4 rounded-xl hover:scale-[1.02] transition-transform active:scale-95">Send Dispatch</button>
            </form>
          </div>

          {/* FAQ */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold italic">Common <span className="text-accent-violet">Questions</span></h2>
            <div className="space-y-4">
              {[
                { q: "How do I update my X1 Chipset firmware?", a: "Firmware updates are delivered through the Elvate Control Center app. Ensure you are connected to power during the process." },
                { q: "What is the warranty period for enterprise storage?", a: "All Velocity Pro and Nucleus series drives come with a 5-year global limited warranty and advanced replacement service." },
                { q: "Can I upgrade the RAM on Evolve X14 laptops?", a: "Evolve X14 memory is integrated for maximum thermal efficiency and low latency, and is not user-upgradeable." },
                { q: "Do you ship hardware internationally?", a: "Yes, we ship to over 120 countries via express secure transit with full customs documentation." }
              ].map((faq, i) => (
                <div key={i} className="p-6 glass-card rounded-2xl border-white/5 group hover:border-accent-violet/30 transition-all cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold">{faq.q}</h4>
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-accent-violet transition-colors">add</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto glass-card rounded-[3rem] p-16 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute -inset-10 bg-primary/5 blur-3xl -z-10"></div>
          <span className="material-symbols-outlined text-primary text-6xl mb-6">location_on</span>
          <h2 className="text-4xl font-black mb-4 tracking-tighter italic uppercase">Visit Our Hub</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            RZ E 17 GALI NO. 9 DABRI EXTN<br/>NEW DELHI-110045
          </p>
          <div className="flex gap-12 flex-wrap justify-center">
            <div className="text-center">
              <div className="text-3xl font-black">9AM - 8PM</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Service Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black">24h</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black">New Delhi</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Base Location</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Support
