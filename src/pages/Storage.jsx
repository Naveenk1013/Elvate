import React from 'react'
import { Link } from 'react-router-dom'

const products = {
  ssds: [
    {
      id: 1,
      name: "Velocity Pro G5",
      capacity: "2TB / 4TB",
      speed: "12,500 MB/s Read",
      tech: "PCIe 5.0 NVMe",
      price: "₹24,000",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg3nL7fUqtIER626nxsRmz7MM47fMJFQuYHDctKzM0P7R96aq_1kYb6Ov0opO0OdG0VK2m1LXIWzsWb-uxOWTUItvqs2azuqDvQJdQrcy_Hh7ue5TzIqDZr7bGZk59tH-5L0syjp9nH-OFL0m-POFlgXdZhYkCF_iYn3VCmiT0ujYEorsn9uAUNqwJIP4yESc5ytdv_1gn5eL2P5xQdqvGi6MDro5tBbgS8bMfy8EANo5U1vyNZmwZVPJpwX-5-1gzTaWfphgT_iDY"
    },
    {
      id: 2,
      name: "Nucleus Ultra",
      capacity: "1TB / 2TB",
      speed: "7,400 MB/s Read",
      tech: "PCIe 4.0 NVMe",
      price: "₹12,000",

      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4NsJzOyt3UoszoDXSbWSOG2IqpivmvD8WVYfmY_PxyrumwU6kCRfXfoR3AC7oXipPpNPdqI9B2X6cox1X6MTK6CAhdUnOE0_BJ-e7XxtmYvs7oWb54nh8TlZz4wuPf0OixfhjT2D6mJi5BzMGE-x0kt_mRjphTZ21EAyDZJ4uq6DqSEq79qz58hTso4KAwFxN7d5mnm0SKrdAqEf5HZ2ya0zEUxF_3X68WrRAv3PLYFlUbUO-0ikXIg8zNFp0ZcPBgMSOlsUr5SEy"
    }
  ],
  ram: [
    {
      id: 3,
      name: "HyperFlow RGB",
      capacity: "32GB / 64GB Kit",
      speed: "8000MT/s",
      tech: "DDR5 Low Latency",
      price: "₹17,500",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAme2e8EIWOIQBrjORf5YTspE5sihoJjWxsm4VpTE5qZjYhTT39NWuBEUJ7mcmJscLnTNJM9irJfEFLdT43OSLJGyTFMVbM3APXnyPvQOQ3wQzOU19GjVx1BbSvIY1Z6fEXfTVcJPXV56ebgrvzq6pScxwEjjImmyJ1z91BCxFl3LEP2R-ENpHN8_IsmrNClPoM43wz7WDiWwaSkyogrP0pZkPgV3XP0fWhBINjMV5-A4R6-FoA-sK6g4aWwrqi9jK3dz3HjB_ibRB7"
    },
    {
      id: 4,
      name: "Streamline Pro",
      capacity: "16GB / 32GB Kit",
      speed: "6400MT/s",
      tech: "DDR5 Precision",
      price: "₹10,500",

      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAme2e8EIWOIQBrjORf5YTspE5sihoJjWxsm4VpTE5qZjYhTT39NWuBEUJ7mcmJscLnTNJM9irJfEFLdT43OSLJGyTFMVbM3APXnyPvQOQ3wQzOU19GjVx1BbSvIY1Z6fEXfTVcJPXV56ebgrvzq6pScxwEjjImmyJ1z91BCxFl3LEP2R-ENpHN8_IsmrNClPoM43wz7WDiWwaSkyogrP0pZkPgV3XP0fWhBINjMV5-A4R6-FoA-sK6g4aWwrqi9jK3dz3HjB_ibRB7"
    }
  ]
}

const Storage = () => {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-xs font-bold mb-6 uppercase tracking-widest">
            Unbound Velocity
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter italic">
            STORAGE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-violet">REDEFINED</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Eliminate bottlenecks with hardware-accelerated encryption and sub-atomic cache management. Engineered for the heaviest creative and data workloads.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-violet/5 blur-[150px] -z-10 rounded-full"></div>
      </section>

      {/* SSDs */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold italic uppercase tracking-tighter">SSD <span className="text-primary">Series</span></h2>
            <div className="h-px flex-grow bg-white/5"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.ssds.map(product => (
              <div key={product.id} className="glass-card rounded-[2rem] p-10 group hover:border-primary/50 transition-all flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden bg-white/5 p-8">
                  <img alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" src={product.img}/>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="text-xs text-slate-500 font-bold mb-2 tracking-widest uppercase">{product.tech}</div>
                  <h3 className="text-3xl font-black mb-6 italic">{product.name}</h3>
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm py-2 border-b border-white/5">
                      <span className="text-slate-500">Capacity</span>
                      <span className="font-bold">{product.capacity}</span>
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-white/5">
                      <span className="text-slate-500">Read Speed</span>
                      <span className="font-bold text-primary">{product.speed}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-black">{product.price}</div>
                    <Link to="/support" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-background-dark transition-all flex items-center justify-center">
                      <span className="material-symbols-outlined">shopping_cart</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RAM */}
      <section className="py-20 px-4 bg-slate-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold italic uppercase tracking-tighter">RAM <span className="text-accent-violet">Modules</span></h2>
            <div className="h-px flex-grow bg-white/5"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.ram.map(product => (
              <div key={product.id} className="glass-card rounded-[2rem] p-10 group hover:border-accent-violet/50 transition-all flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden bg-white/5 p-8">
                  <img alt={product.name} className="w-full h-full object-contain group-hover:rotate-6 transition-transform duration-500" src={product.img}/>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="text-xs text-slate-500 font-bold mb-2 tracking-widest uppercase">{product.tech}</div>
                  <h3 className="text-3xl font-black mb-6 italic">{product.name}</h3>
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm py-2 border-b border-white/5">
                      <span className="text-slate-500">Latency</span>
                      <span className="font-bold">CL30-36-36</span>
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-white/5">
                      <span className="text-slate-500">Transfer Rate</span>
                      <span className="font-bold text-accent-violet">{product.speed}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-black">{product.price}</div>
                    <Link to="/support" className="p-3 bg-white/5 rounded-full hover:bg-accent-violet hover:text-white transition-all flex items-center justify-center">
                      <span className="material-symbols-outlined">add</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="text-center p-8 glass-card rounded-3xl border-primary/20">
            <div className="material-symbols-outlined text-primary text-5xl mb-4">bolt</div>
            <div className="text-5xl font-black mb-2 italic">12.5 <span className="text-xl">GB/s</span></div>
            <p className="text-slate-500 uppercase text-xs font-bold tracking-widest">Peak Read Throughput</p>
          </div>
          <div className="text-center p-8 glass-card rounded-3xl border-accent-violet/20">
            <div className="material-symbols-outlined text-accent-violet text-5xl mb-4">memory</div>
            <div className="text-5xl font-black mb-2 italic">8000 <span className="text-xl">MT/s</span></div>
            <p className="text-slate-500 uppercase text-xs font-bold tracking-widest">Max Frequency Stable</p>
          </div>
          <div className="text-center p-8 glass-card rounded-3xl border-white/10">
            <div className="material-symbols-outlined text-slate-400 text-5xl mb-4">cool_to_dry</div>
            <div className="text-5xl font-black mb-2 italic">-20<span className="text-xl">°C</span></div>
            <p className="text-slate-500 uppercase text-xs font-bold tracking-widest">Active Cooling Delta</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Storage
