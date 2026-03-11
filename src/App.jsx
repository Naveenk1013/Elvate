import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Processors from './pages/Processors'
import Storage from './pages/Storage'
import Laptops from './pages/Laptops'
import Support from './pages/Support'

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => (
  <header className="fixed top-0 w-full z-50 glass-header">
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-3xl">memory</span>
        <span className="text-xl font-black tracking-tighter uppercase italic">Elvate <span className="text-primary">Infotech</span></span>
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link className="hover:text-primary transition-colors" to="/processors">Processors</Link>
        <Link className="hover:text-primary transition-colors" to="/storage">Storage</Link>
        <Link className="hover:text-primary transition-colors" to="/laptops">Laptops</Link>
        <Link className="hover:text-primary transition-colors" to="/support">Support</Link>
      </nav>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <span className="material-symbols-outlined">search</span>
        </button>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
        </button>
        <Link to="/support" className="hidden md:block bg-primary text-background-dark px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform text-center">
          Build PC
        </Link>
      </div>
    </div>
  </header>
)

const Footer = () => (
  <footer className="bg-slate-950/80 border-t border-white/5 pt-20 pb-10 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl">memory</span>
          <span className="text-xl font-black tracking-tighter uppercase italic">Elvate</span>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed">
          Pioneering hardware solutions for the digital frontier. Engineered with precision, powered by innovation.
        </p>
        <div className="flex gap-4">
          <a className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors" href="https://elvate.in"><span className="material-symbols-outlined text-sm">public</span></a>
          <a className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-sm">share</span></a>
          <a className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors" href="mailto:elvate1009@gmail.com"><span className="material-symbols-outlined text-sm">alternate_email</span></a>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-6">Our Services</h4>
        <ul className="space-y-4 text-sm text-slate-500">
          <li>Computer Maintenance</li>
          <li>Cartridge Refill</li>
          <li>Printer Service</li>
          <li>CCTV Camera & more</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6">Contact Us</h4>
        <ul className="space-y-4 text-sm text-slate-500">
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-sm">call</span>
            <span>+91 9631028482</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-sm">location_on</span>
            <span>RZ E 17 GALI NO. 9 DABRI EXTN<br/>NEW DELHI-110045</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-sm">mail</span>
            <span>elvate1009@gmail.com</span>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6">Support</h4>
        <ul className="space-y-4 text-sm text-slate-500">
          <li><Link className="hover:text-primary transition-colors" to="/support">Drivers</Link></li>
          <li><Link className="hover:text-primary transition-colors" to="/support">Manuals</Link></li>
          <li><Link className="hover:text-primary transition-colors" to="/support">Warranty</Link></li>
          <li><Link className="hover:text-primary transition-colors" to="/support">Contact Us</Link></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
      <p>© 2024 Elvate Infotech Global | <a href="https://elvate.in" className="hover:text-primary">elvate.in</a></p>
      <div className="flex gap-6">
        <a className="hover:text-primary" href="#">Privacy Policy</a>
        <a className="hover:text-primary" href="#">Terms of Service</a>
        <a className="hover:text-primary" href="#">Cookie Settings</a>
      </div>
    </div>
  </footer>
)

const MobileNav = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
    <div className="glass-header rounded-2xl flex items-center justify-around py-3 border border-white/10">
      {[
        { icon: "home", label: "Home", to: "/" },
        { icon: "memory", label: "Parts", to: "/processors" },
        { icon: "laptop_mac", label: "Laptops", to: "/laptops" },
        { icon: "support_agent", label: "Support", to: "/support" }
      ].map((item, i) => (
        <Link key={i} className="flex flex-col items-center gap-1 text-slate-500" to={item.to}>
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="text-[10px] font-bold uppercase">{item.label}</span>
        </Link>
      ))}
    </div>
  </div>
)

const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen flex flex-col items-center justify-center p-4">
    <h1 className="text-4xl font-bold mb-4">{title} Page</h1>
    <p className="text-slate-400">Content for {title} is coming soon...</p>
    <Link to="/" className="mt-8 text-primary hover:underline">Back to Home</Link>
  </div>
)

function App() {
  return (
    <Router>
      <div className="font-display">
        <Navbar />
        <main className="relative pt-20 overflow-hidden min-h-screen">
          <ScrollToTop />
          <div className="absolute inset-0 liquid-gradient -z-10"></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/processors" element={<Processors />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/laptops" element={<Laptops />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
        <MobileNav />
      </div>
    </Router>
  )
}

export default App
