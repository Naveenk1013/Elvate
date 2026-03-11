import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const processorLineup = [
  {
    id: 1,
    name: "Quantum X1-900",
    series: "Quantum X1",
    specs: "32 Cores / 64 Threads",
    frequency: "8.4GHz Boost",
    price: "₹80,000",
    tag: "Workstation",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1DFZspvpuX_4H4ZjCntSMM2lvwZPiG1WuzhWN8dn_SVSOhvmCJTQHCq7-rxc_H0DUpqMwrxAn1iiRsl7QUK9mIHLrp2XGwskDKOCCcVV_nQb1PLMW0fkxm5idoj00v8SbAcZPuUok6jBLVmQBQADgXqbuL0QsrsUVm_s28wciGgWX9IyDRhITLvcvZS1A-8H4G8sk2G0X8UeC5A-sFcws1F1oEel5cLCXPwmzWSqg69p_9C6IgiP5aJ-2xos6PJ92BxFuZnOU5fjB"
  },
  {
    id: 2,
    name: "Neural Flow P7",
    series: "Neural Flow",
    specs: "16 Cores / 32 Threads",
    frequency: "6.2GHz Boost",
    price: "₹44,000",
    tag: "Gaming",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPDT9iGjMn798vkOoJ5VAbK7MennPnqrU9VZxCGpqbHD49TdgJF-9PZrwYrI6OITlWXg4gcotO1SJb1Q9_mvZRrcdFUixJusJf0-5caLVH9-qhzwKmpxiqx2h2p8j9D-glmsfc-QfT9nP35UuPwY6BQBu5OEDJACnfK9e-1VU0sUF0X_dcD3jqIe-r157MAPoNx-LmxxiNocm56TcvKjdRU7_SmRiVn6yrfjRTanYZVDQu3rzv8hL5yzQRWf-6KqnS-aDsEi8QMPNN"
  },
  {
    id: 3,
    name: "Titan Ultra Core v2",
    series: "Titan Ultra",
    specs: "64 Cores / 128 Threads",
    frequency: "7.8GHz Boost",
    price: "₹1,20,000",
    tag: "Enterprise",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyoOlt22_IBbNOze7khYbd3XjwYtZKXwPKhFEp7shL1R99OuSYvcaN4XDAAY6bKxTrfuVfSWYrKkaQT-AVor5-TK9cu92IU6XZMgYu8p2v2ENuW1vkMzdMWYG7dvGWMufclr_Ma3dWbIpFK4zvrsUiH6ecALdau73AjirCnysq_Mm9BfKkFXkFRBURXXjzEJxYoLChDf_usHh4UkLCI7Qku1oCPtK392YEDfGRfHxPMzIvDPQTdBqsHR1jwYempuNQeMar-b2TL9VV"
  },
  {
    id: 4,
    name: "Quantum X1-700",
    series: "Quantum X1",
    specs: "24 Cores / 48 Threads",
    frequency: "7.2GHz Boost",
    price: "₹60,000",
    tag: "Workstation",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuANMXr0Hrq3Not4_yxCLOErg8iVKOxDkr5r-LwQ4DizSKQCupIwJU4NZxYPqNzLLByYlOqYsAVwDesHYxkYMcy2ukip6b4GqcwRkXIlN4A9j4hB7DH2W1PINCINYYp9a3aELhQuNjVIF7cd2ipCqcRwoZAJ-fwcTYLGGoIgaPj_6nYls6BLeG9guDniknDzeRJak7c6A2tWTUEuyXNusJ1wxhz4zpVnh1b2w7-F0ag7SWQfo36Dp9nnBgR3oQ3GslfAw2YxKaIGzGag"
  },
  {
    id: 5,
    name: "Neural Flow P5",
    series: "Neural Flow",
    specs: "12 Cores / 24 Threads",
    frequency: "5.8GHz Boost",
    price: "₹32,000",
    tag: "Gaming",

    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyoOlt22_IBbNOze7khYbd3XjwYtZKXwPKhFEp7shL1R99OuSYvcaN4XDAAY6bKxTrfuVfSWYrKkaQT-AVor5-TK9cu92IU6XZMgYu8p2v2ENuW1vkMzdMWYG7dvGWMufclr_Ma3dWbIpFK4zvrsUiH6ecALdau73AjirCnysq_Mm9BfKkFXkFRBURXXjzEJxYoLChDf_usHh4UkLCI7Qku1oCPtK392YEDfGRfHxPMzIvDPQTdBqsHR1jwYempuNQeMar-b2TL9VV"
  }
]

const Processors = () => {
  const [filter, setFilter] = useState('All')

  const filteredProcessors = filter === 'All' 
    ? processorLineup 
    : processorLineup.filter(p => p.series === filter)

  const series = ['All', ...new Set(processorLineup.map(p => p.series))]

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 mb-20">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 glow-text tracking-tighter">
            NEXT-GEN <span className="text-primary">SILICON</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Pushing the boundaries of Moore's Law with sub-nanometer architecture and integrated quantum-AI accelerators.
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-[2/1] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
      </section>

      {/* Filter Section */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/5 pb-8">
            <div className="flex gap-4">
              {series.map(s => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    filter === s 
                    ? 'bg-primary text-background-dark' 
                    : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <p className="text-slate-500 text-sm">Showing {filteredProcessors.length} models</p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-4 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProcessors.map((p) => (
            <div key={p.id} className="glass-card rounded-3xl overflow-hidden group hover:border-primary/50 transition-all flex flex-col">
              <div className="h-64 relative overflow-hidden">
                <img alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={p.img}/>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-primary/20 backdrop-blur-md text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20">
                  {p.tag}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-xs text-primary font-bold mb-2 uppercase tracking-widest">{p.series}</div>
                <h3 className="text-2xl font-bold mb-6 italic">{p.name}</h3>
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-center gap-3 text-slate-400">
                    <span className="material-symbols-outlined text-sm">hub</span>
                    <span className="text-sm">{p.specs}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <span className="material-symbols-outlined text-sm">speed</span>
                    <span className="text-sm">{p.frequency}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="text-2xl font-black tracking-tight">{p.price}</div>
                  <Link to="/support" className="bg-primary text-background-dark px-6 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-transform active:scale-95 text-center">
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Preview */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <span className="material-symbols-outlined text-9xl">memory</span>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Enterprise Grade Hardware</h2>
            <p className="text-slate-400 mb-8 max-w-lg">
              Need custom silicon for large scale deployments? Our technical consultants can help design optimized architecture for your specific workload requirements.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-4xl font-black text-primary mb-1 tracking-tighter">99.9%</div>
                <div className="text-xs text-slate-500 uppercase font-bold">Uptime Efficiency</div>
              </div>
              <div>
                <div className="text-4xl font-black text-accent-violet mb-1 tracking-tighter">-45%</div>
                <div className="text-xs text-slate-500 uppercase font-bold">Energy Profile</div>
              </div>
            </div>
            <Link to="/support" className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold hover:border-primary/50 transition-all flex items-center gap-3 w-fit">
              Download Full Specs <span className="material-symbols-outlined">description</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Processors
