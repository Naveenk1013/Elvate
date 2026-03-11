import React from 'react'
import { Link } from 'react-router-dom'

const laptops = [
  {
    id: 1,
    name: "EVOLVE X14",
    series: "Ultraportable",
    description: "Designed for the modern nomad. Ultra-thin magnesium chassis with zero-compromise performance.",
    price: "From ₹1,04,000",
    color: "primary",
    specs: ["14\" 4K OLED 120Hz", "X1 Neural-Link Chipset", "Up to 32GB LPDDR5x", "18 Hour Battery"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEgeIryCWh9U0IVtLHkmdW_do5p_nkt0Vx8bFxhnT19TvpYsgUb9zMWdmI11oQkv5jI4vy1kaDdXvbB9rAnZZ6blD6mI_bMwW9rcx-pv8PyZj64ZHu36PIfkSBJVKr7LMnY0oIH64wn7wn5PgIEyINrb399lIv3DrBZ5CwI2VZmmAT4YDtl0qySRkk7JyVGvDLW75WdXW2hL_ArseCxhUycx_ygST1GRD3z4T2kyg4uB-HFwyAHKeeBjpK10vYhYgxtEwJn92cUSEF"
  },
  {
    id: 2,
    name: "TITAN PRO 16",
    series: "Workstation",
    description: "Desktop replacement redefined. The ultimate tool for 3D rendering, simulation, and high-end compute.",
    price: "From ₹2,00,000",
    color: "accent-violet",
    specs: ["16\" 8K HDR 1600nits", "Titan Ultra Core v2", "Up to 128GB ECC RAM", "Liquid-Phase Cooling"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgqkXz-51TucCpjndA_WXBOiisc9A5YJAsvgqwYS2EU-MhMtxIvJN1sFRmp8ZkNJcrtZ6mwqve9sLInsDggJIyHNspGXGwCrR4n2aX6gt3ms3WnZMF_M_govXOqvVZdQt2Ht03PdJV7dyTYveLBukK-vRSNCTOiMJeTZYtEN7jZpSgWl03231YZzvsu_42HGg2VDsDRA9fknt1Cy3ZGtbXmBsRTgkVCjupglEocJnNpWVV8BztkSlp9tmz8TVod5yljORCZQGbm6HQ"
  }
]

const Laptops = () => {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="relative py-24 px-4 text-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter italic uppercase">
            POWER <span className="text-primary truncate">WITHOUT</span> LIMITS
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Uncompromising desktop-grade performance engineered into a fluid, minimalist form factor. Experience the future of mobile computing.
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl aspect-square bg-primary/5 blur-[120px] rounded-full -top-1/2 -z-10"></div>
      </section>

      {/* Laptop Showcases */}
      <section className="px-4 space-y-32">
        {laptops.map((laptop, index) => (
          <div key={laptop.id} className="max-w-7xl mx-auto">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="w-full lg:w-1/2 relative group">
                <div className={`absolute -inset-10 bg-${laptop.color}/10 blur-3xl opacity-50 rounded-full group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative glass-card rounded-[3rem] p-12 overflow-hidden aspect-video flex items-center justify-center">
                  <img 
                    alt={laptop.name} 
                    className="w-full h-full object-contain rotate-[-12deg] group-hover:rotate-0 transition-all duration-1000 scale-125 group-hover:scale-100" 
                    src={laptop.img}
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-8 text-left">
                <div className={`inline-block text-${laptop.color} text-xs font-black uppercase tracking-[0.2em] mb-2`}>
                  {laptop.series} Series
                </div>
                <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter">{laptop.name}</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {laptop.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  {laptop.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className={`material-symbols-outlined text-${laptop.color}`}>check_circle</span>
                      <span className="text-sm text-slate-300 font-medium">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 flex items-center gap-6">
                  <div className="text-3xl font-black">{laptop.price}</div>
                  <Link to="/support" className={`bg-${laptop.color} ${laptop.color === 'primary' ? 'text-background-dark' : 'text-white'} px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform active:scale-95 flex items-center justify-center`}>
                    Configure & Buy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Feature Grid */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-10 rounded-3xl group hover:border-primary/30 transition-all">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">workspace_premium</span>
            <h3 className="text-xl font-bold mb-4">Aerospace Magnesium</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Structural integrity met with incredibly low weight. Designed to withstand the rigors of travel without compromise.</p>
          </div>
          <div className="glass-card p-10 rounded-3xl group hover:border-accent-violet/30 transition-all">
            <span className="material-symbols-outlined text-accent-violet text-4xl mb-6">visibility</span>
            <h3 className="text-xl font-bold mb-4">Neural-Vivid OLED</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Cinema-grade color accuracy with true blacks and 1,600 nits peak brightness for professional-grade creative work.</p>
          </div>
          <div className="glass-card p-10 rounded-3xl group hover:border-white/20 transition-all">
            <span className="material-symbols-outlined text-slate-400 text-4xl mb-6">eco</span>
            <span className="material-symbols-outlined text-slate-400 text-4xl mb-6 ml-[-1rem]">thermostat</span>
            <h3 className="text-xl font-bold mb-4">Liquid-Phase Cooling</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Patented sub-zero thermal management allows for sustained peak performance without thermal throttling.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4">
        <div className="max-w-5xl mx-auto glass-card rounded-3xl p-16 text-center border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 liquid-gradient opacity-20 -z-10"></div>
          <h2 className="text-4xl font-black mb-6">Need extreme performance?</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">Our custom-configured laptops are built to order. Select your specs and our engineers will hand-assemble your machine.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/support" className="bg-primary text-background-dark px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center justify-center">Start Configuration</Link>
            <Link to="/support" className="bg-white/5 border border-white/10 px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center text-slate-300">Compare Models</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Laptops
