import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center px-4 overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Next-Gen Architecture Available
        </div>
        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight glow-text">
          The <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-violet">Future</span> of <br/> Computing
        </h1>
        <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
          Experience fluid performance with our quantum-inspired chipsets and high-velocity hardware designed for the next era of digital intelligence.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/processors" className="bg-primary text-background-dark px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(19,200,236,0.3)] transition-all">
            Explore Tech
          </Link>
          <Link to="/support" className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
            Build Your PC
          </Link>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full mix-blend-screen opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative glass-card rounded-3xl p-8 aspect-square flex items-center justify-center overflow-hidden">
          <img alt="Modern Processor Chipset" className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANMXr0Hrq3Not4_yxCLOErg8iVKOxDkr5r-LwQ4DizSKQCupIwJU4NZxYPqNzLLByYlOqYsAVwDesHYxkYMcy2ukip6b4GqcwRkXIlN4A9j4hB7DH2W1PINCINYYp9a3aELhQuNjVIF7cd2ipCqcRwoZAJ-fwcTYLGGoIgaPj_6nYls6BLeG9guDniknDzeRJak7c6A2tWTUEuyXNusJ1wxhz4zpVnh1b2w7-F0ag7SWQfo36Dp9nnBgR3oQ3GslfAw2YxKaIGzGag"/>
          <div className="absolute bottom-12 right-12 glass-card p-6 rounded-2xl border-primary/30">
            <div className="text-xs text-primary font-bold mb-1 italic">CORE FREQUENCY</div>
            <div className="text-4xl font-black italic">8.4<span className="text-sm">GHz</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Chipsets = () => (
  <section className="py-24 px-4 bg-slate-950/30">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-4">Featured Chipsets</h2>
          <p className="text-slate-400">Revolutionary silicon designed for unprecedented workloads.</p>
        </div>
        <Link className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform" to="/processors">
          View Roadmap <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Quantum X1 Series", price: "₹48,000", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1DFZspvpuX_4H4ZjCntSMM2lvwZPiG1WuzhWN8dn_SVSOhvmCJTQHCq7-rxc_H0DUpqMwrxAn1iiRsl7QUK9mIHLrp2XGwskDKOCCcVV_nQb1PLMW0fkxm5idoj00v8SbAcZPuUok6jBLVmQBQADgXqbuL0QsrsUVm_s28wciGgWX9IyDRhITLvcvZS1A-8H4G8sk2G0X8UeC5A-sFcws1F1oEel5cLCXPwmzWSqg69p_9C6IgiP5aJ-2xos6PJ92BxFuZnOU5fjB", desc: "Neural-mapped architecture for real-time AI processing and quantum simulation." },
          { title: "Neural Flow Pro", price: "₹68,000", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPDT9iGjMn798vkOoJ5VAbK7MennPnqrU9VZxCGpqbHD49TdgJF-9PZrwYrI6OITlWXg4gcotO1SJb1Q9_mvZRrcdFUixJusJf0-5caLVH9-qhzwKmpxiqx2h2p8j9D-glmsfc-QfT9nP35UuPwY6BQBu5OEDJACnfK9e-1VU0sUF0X_dcD3jqIe-r157MAPoNx-LmxxiNocm56TcvKjdRU7_SmRiVn6yrfjRTanYZVDQu3rzv8hL5yzQRWf-6KqnS-aDsEi8QMPNN", desc: "Liquid-cooled efficiency paired with adaptive multi-core thread management.", bestSeller: true },
          { title: "Titan Ultra Core", price: "₹1,04,000", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyoOlt22_IBbNOze7khYbd3XjwYtZKXwPKhFEp7shL1R99OuSYvcaN4XDAAY6bKxTrfuVfSWYrKkaQT-AVor5-TK9cu92IU6XZMgYu8p2v2ENuW1vkMzdMWYG7dvGWMufclr_Ma3dWbIpFK4zvrsUiH6ecALdau73AjirCnysq_Mm9BfKkFXkFRBURXXjzEJxYoLChDf_usHh4UkLCI7Qku1oCPtK392YEDfGRfHxPMzIvDPQTdBqsHR1jwYempuNQeMar-b2TL9VV", desc: "Our flagship workstation processor for heavy 3D rendering and data science." }
        ].map((chip, i) => (
          <div key={i} className="glass-card rounded-3xl p-8 group hover:border-primary/50 transition-all relative overflow-hidden">
            {chip.bestSeller && <div className="absolute top-0 right-0 bg-primary text-background-dark text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase">Best Seller</div>}
            <div className="h-48 mb-8 rounded-2xl overflow-hidden relative">
              <img alt={chip.title} className="w-full h-full object-cover" src={chip.img}/>
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
            </div>
            <h3 className="text-2xl font-bold mb-2">{chip.title}</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">{chip.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-primary font-bold">From {chip.price}</span>

              <button className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-background-dark transition-all">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Storage = () => (
  <section className="py-24 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-10 bg-accent-violet/10 blur-3xl rounded-full"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="glass-card p-4 rounded-2xl h-64 flex items-center justify-center">
                <img alt="SSD" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg3nL7fUqtIER626nxsRmz7MM47fMJFQuYHDctKzM0P7R96aq_1kYb6Ov0opO0OdG0VK2m1LXIWzsWb-uxOWTUItvqs2azuqDvQJdQrcy_Hh7ue5TzIqDZr7bGZk59tH-5L0syjp9nH-OFL0m-POFlgXdZhYkCF_iYn3VCmiT0ujYEorsn9uAUNqwJIP4yESc5ytdv_1gn5eL2P5xQdqvGi6MDro5tBbgS8bMfy8EANo5U1vyNZmwZVPJpwX-5-1gzTaWfphgT_iDY"/>
              </div>
              <div className="glass-card p-4 rounded-2xl h-48 flex items-center justify-center">
                <img alt="RAM" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAme2e8EIWOIQBrjORf5YTspE5sihoJjWxsm4VpTE5qZjYhTT39NWuBEUJ7mcmJscLnTNJM9irJfEFLdT43OSLJGyTFMVbM3APXnyPvQOQ3wQzOU19GjVx1BbSvIY1Z6fEXfTVcJPXV56ebgrvzq6pScxwEjjImmyJ1z91BCxFl3LEP2R-ENpHN8_IsmrNClPoM43wz7WDiWwaSkyogrP0pZkPgV3XP0fWhBINjMV5-A4R6-FoA-sK6g4aWwrqi9jK3dz3HjB_ibRB7"/>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="glass-card p-4 rounded-2xl h-48 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl font-black text-primary mb-2">12GB/s</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Read Speed</div>
                </div>
              </div>
              <div className="glass-card p-4 rounded-2xl h-64 flex items-center justify-center">
                <img alt="Cloud" className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4NsJzOyt3UoszoDXSbWSOG2IqpivmvD8WVYfmY_PxyrumwU6kCRfXfoR3AC7oXipPpNPdqI9B2X6cox1X6MTK6CAhdUnOE0_BJ-e7XxtmYvs7oWb54nh8TlZz4wuPf0OixfhjT2D6mJi5BzMGE-x0kt_mRjphTZ21EAyDZJ4uq6DqSEq79qz58hTso4KAwFxN7d5mnm0SKrdAqEf5HZ2ya0zEUxF_3X68WrRAv3PLYFlUbUO-0ikXIg8zNFp0ZcPBgMSOlsUr5SEy"/>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="text-5xl font-bold leading-tight">Next-Gen Storage <br/>&amp; Memory</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Don't let legacy hardware bottleneck your vision. Our Velocity series SSDs and HyperFlow RAM utilize patented liquid-phase cooling and sub-atomic cache management.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary text-xl">speed</span>
              </div>
              <div>
                <h4 className="font-bold">Zero Latency Bus</h4>
                <p className="text-sm text-slate-500">Eliminate data friction with our unified memory bus.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary text-xl">security</span>
              </div>
              <div>
                <h4 className="font-bold">Encrypted Nucleus</h4>
                <p className="text-sm text-slate-500">Hardware-level encryption that doesn't sacrifice speed.</p>
              </div>
            </li>
          </ul>
          <Link to="/storage" className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold text-lg hover:border-primary/50 transition-all flex items-center gap-3">
            Explore Performance <span className="material-symbols-outlined">bolt</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
)

const Laptops = () => (
  <section className="py-24 px-4 bg-primary/5">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Premium Laptops</h2>
      <p className="text-slate-400">Desktop power in a fluid, minimalist form factor.</p>
    </div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="glass-card rounded-[2rem] p-12 flex flex-col justify-between group overflow-hidden relative min-h-[500px]">
        <div className="relative z-10">
          <h3 className="text-4xl font-black italic mb-2">EVOLVE <span className="text-primary">X14</span></h3>
          <p className="text-slate-400 max-w-xs mb-8">Ultra-thin magnesium chassis with integrated Neural-Link chipset.</p>
          <Link to="/laptops" className="inline-block bg-primary text-background-dark px-6 py-3 rounded-full font-bold">Configure Now</Link>
        </div>
        <img alt="Laptop" className="absolute -bottom-10 -right-20 w-3/4 object-contain rotate-[-15deg] group-hover:rotate-[-10deg] transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEgeIryCWh9U0IVtLHkmdW_do5p_nkt0Vx8bFxhnT19TvpYsgUb9zMWdmI11oQkv5jI4vy1kaDdXvbB9rAnZZ6blD6mI_bMwW9rcx-pv8PyZj64ZHu36PIfkSBJVKr7LMnY0oIH64wn7wn5PgIEyINrb399lIv3DrBZ5CwI2VZmmAT4YDtl0qySRkk7JyVGvDLW75WdXW2hL_ArseCxhUycx_ygST1GRD3z4T2kyg4uB-HFwyAHKeeBjpK10vYhYgxtEwJn92cUSEF"/>
      </div>
      <div className="glass-card rounded-[2rem] p-12 flex flex-col justify-between group overflow-hidden relative min-h-[500px]">
        <div className="relative z-10">
          <h3 className="text-4xl font-black italic mb-2">TITAN <span className="text-accent-violet">PRO</span></h3>
          <p className="text-slate-400 max-w-xs mb-8">The world's most powerful workstation laptop. 128GB RAM ready.</p>
          <Link to="/laptops" className="inline-block bg-accent-violet text-white px-6 py-3 rounded-full font-bold">Pre-order</Link>
        </div>
        <img alt="Laptop" className="absolute -bottom-10 -right-20 w-3/4 object-contain rotate-[-15deg] group-hover:rotate-[-10deg] transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgqkXz-51TucCpjndA_WXBOiisc9A5YJAsvgqwYS2EU-MhMtxIvJN1sFRmp8ZkNJcrtZ6mwqve9sLInsDggJIyHNspGXGwCrR4n2aX6gt3ms3WnZMF_M_govXOqvVZdQt2Ht03PdJV7dyTYveLBukK-vRSNCTOiMJeTZYtEN7jZpSgWl03231YZzvsu_42HGg2VDsDRA9fknt1Cy3ZGtbXmBsRTgkVCjupglEocJnNpWVV8BztkSlp9tmz8TVod5yljORCZQGbm6HQ"/>
      </div>
    </div>
  </section>
)

const Newsletter = () => (
  <section className="py-24 px-4 overflow-hidden relative">
    <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full translate-y-1/2"></div>
    <div className="max-w-4xl mx-auto glass-card rounded-3xl p-12 text-center relative z-10 border-primary/20">
      <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to build the future?</h2>
      <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Join thousands of engineers, creators, and gamers pushing the boundaries of what's possible with Elvate Infotech hardware.</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <input className="w-full sm:w-80 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Enter your email for updates" type="email"/>
        <button className="w-full sm:w-auto bg-primary text-background-dark px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
          Join Elite
        </button>
      </div>
      <p className="text-[10px] text-slate-500 mt-6 uppercase tracking-widest font-bold">Limited release availability for new X1 Chipsets</p>
    </div>
  </section>
)

const Services = () => (
  <section className="py-24 px-4 bg-slate-950/30">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Core Services</h2>
      <p className="text-slate-400">Professional technology solutions for home and enterprise.</p>
    </div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: "Computer Maintenance", icon: "terminal", desc: "Expert optimization and repair for all systems." },
        { title: "Cartridge Refill", icon: "ink_high", desc: "High-quality refills for all major printer brands." },
        { title: "Printer Service", icon: "print", desc: "Comprehensive printer maintenance and hardware repair." },
        { title: "CCTV & Security", icon: "videocam", desc: "Modern surveillance solutions for your safety." }
      ].map((service, i) => (
        <div key={i} className="glass-card p-8 rounded-[2rem] text-center group hover:border-primary/50 transition-all">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-primary text-3xl">{service.icon}</span>
          </div>
          <h3 className="text-xl font-bold mb-4">{service.title}</h3>
          <p className="text-slate-500 text-sm">{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
)

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Chipsets />
      <Storage />
      <Laptops />
      <Newsletter />
    </>
  )
}


export default Home
