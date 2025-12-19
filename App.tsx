
import React, { useState, useEffect } from 'react';
import { translations } from './translations';
import { Language } from './types';
import { 
  Stethoscope, 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  ChevronRight, 
  MessageSquare, 
  Menu, 
  X, 
  Globe,
  Award,
  Clock,
  CheckCircle2,
  FileText
} from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = translations[lang];
  const isRtl = lang === 'he';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    const langs: Language[] = ['en', 'he', 'ru'];
    const nextIndex = (langs.indexOf(lang) + 1) % langs.length;
    setLang(langs[nextIndex]);
  };

  // Fixed NavLink: making children optional resolves the TypeScript error where it's reported as missing despite being passed
  const NavLink = ({ href, children }: { href: string; children?: React.ReactNode }) => (
    <a 
      href={href} 
      className="text-slate-600 hover:text-cyan-600 font-medium transition-colors"
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <div className={`min-h-screen font-sans ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-100/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-indigo-100/30 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-cyan-200">
              <Stethoscope size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">KATYA <span className="text-cyan-600">CARE</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="#services">{t.nav.services}</NavLink>
            <NavLink href="#why-belarus">{t.nav.whyBelarus}</NavLink>
            <NavLink href="#how-it-works">{t.nav.howItWorks}</NavLink>
            <NavLink href="#testimonials">{t.nav.testimonials}</NavLink>
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 transition-all text-sm font-semibold uppercase"
            >
              <Globe size={16} />
              {lang}
            </button>
            <a 
              href="#contact" 
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-200 transition-all"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full glass shadow-2xl flex flex-col p-8 gap-6 animate-in slide-in-from-top duration-300">
            <NavLink href="#services">{t.nav.services}</NavLink>
            <NavLink href="#why-belarus">{t.nav.whyBelarus}</NavLink>
            <NavLink href="#how-it-works">{t.nav.howItWorks}</NavLink>
            <NavLink href="#testimonials">{t.nav.testimonials}</NavLink>
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 w-fit px-4 py-2 rounded-lg border border-slate-200 uppercase font-bold"
            >
              <Globe size={18} />
              {lang}
            </button>
            <a href="#contact" className="bg-cyan-600 text-white px-6 py-3 rounded-xl font-bold text-center">
              {t.nav.contact}
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-bold border border-cyan-100">
              <Sparkles size={16} />
              {lang === 'he' ? 'חוויה רפואית יוקרתית' : lang === 'ru' ? 'Премиальный медицинский опыт' : 'Premium Medical Experience'}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.15]">
              {t.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
              {t.hero.subHeadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="px-8 py-4 bg-cyan-600 text-white rounded-2xl font-bold text-lg hover:bg-cyan-700 hover:shadow-xl hover:shadow-cyan-200 transition-all flex items-center justify-center gap-2 group">
                {t.hero.cta}
                <ChevronRight size={20} className={`transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </a>
              <a href="#services" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:border-cyan-300 hover:bg-slate-50 transition-all text-center">
                {t.nav.services}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-transparent rounded-[3rem] blur-2xl opacity-50"></div>
            <img 
              src="https://picsum.photos/seed/medical/800/600" 
              alt="Medical Tech" 
              className="relative rounded-[2.5rem] shadow-2xl border-4 border-white object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-8 -left-8 glass p-6 rounded-3xl shadow-xl hidden md:block max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                  <ShieldCheck size={18} />
                </div>
                <span className="font-bold text-slate-900 text-sm">Verified Providers</span>
              </div>
              <p className="text-xs text-slate-500">Only top-tier licensed clinics in Belarus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t.services.title}</h2>
            <div className="h-1.5 w-24 bg-cyan-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award className="text-cyan-600" />, ...t.services.dental },
              { icon: <Sparkles className="text-cyan-600" />, ...t.services.aesthetic },
              { icon: <FileText className="text-cyan-600" />, ...t.services.planning },
              { icon: <MessageSquare className="text-cyan-600" />, ...t.services.coordination },
            ].map((service, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/50 transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Belarus Section */}
      <section id="why-belarus" className="py-24 futuristic-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t.whyBelarus.title}</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: <Award />, ...t.whyBelarus.professionals },
              { icon: <Clock />, ...t.whyBelarus.modernClinics },
              { icon: <CheckCircle2 />, ...t.whyBelarus.standards },
              { icon: <Sparkles />, ...t.whyBelarus.savings },
              { icon: <MapPin />, ...t.whyBelarus.tourism },
            ].map((item, idx) => (
              <div key={idx} className={`p-8 rounded-3xl glass flex gap-6 ${idx === 4 ? 'lg:col-span-2' : ''}`}>
                <div className="text-cyan-600 shrink-0">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why KATYA CARE Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-600 opacity-10 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">{t.whyKatya.title}</h2>
            <ul className="space-y-4">
              {t.whyKatya.points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg text-slate-300">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2">
             <div className="relative group">
                <img src="https://picsum.photos/seed/care/600/400" className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" alt="Support" />
                <div className="absolute inset-0 bg-cyan-600/20 mix-blend-overlay rounded-3xl"></div>
             </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t.howItWorks.title}</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Visual connector line for desktop */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-slate-100 -z-0"></div>
            {t.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="relative z-10 text-center space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-600 text-white flex items-center justify-center mx-auto shadow-xl shadow-cyan-100 text-2xl font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 futuristic-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t.testimonials.title}</h2>
            <p className="text-slate-500 italic">{t.testimonials.note}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl glass space-y-6">
                <div className="flex text-yellow-400 gap-1">
                  {[...Array(5)].map((_, i) => <Sparkles key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg text-slate-700 font-medium leading-relaxed italic">"{item.quote}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${idx}`} alt={item.name} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                    <p className="text-xs text-cyan-600 font-bold uppercase tracking-wider">{item.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">{t.about.title}</h2>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            {t.about.content}
          </p>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
             {t.trust.points.map((p, i) => (
               <div key={i} className="flex items-center gap-2 font-bold text-slate-400">
                  <ShieldCheck size={24} />
                  <span className="text-sm uppercase tracking-widest">{p}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA & Form */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-50/50 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              {t.footer.ctaTitle}
            </h2>
            <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shrink-0">
                    <MessageSquare size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900">Contact Us Directly</h4>
                    <p className="text-slate-600">Our team speaks Hebrew, Russian, and English fluently.</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                    <ShieldCheck size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900">Your Data is Secure</h4>
                    <p className="text-slate-600">We respect your privacy and handle medical data with absolute care.</p>
                 </div>
               </div>
            </div>
          </div>
          <div className="glass p-8 md:p-12 rounded-[2.5rem] shadow-2xl border-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block">{t.footer.form.name}</label>
                  <input type="text" className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block">{t.footer.form.phone}</label>
                  <input type="tel" className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 block">{t.footer.form.email}</label>
                <input type="email" className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none transition-all" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block">{t.footer.form.lang}</label>
                  <select className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none transition-all">
                    <option>Hebrew</option>
                    <option>Russian</option>
                    <option>English</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block">{t.footer.form.treatment}</label>
                  <input type="text" className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none transition-all" />
                </div>
              </div>
              <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-cyan-600 transition-all text-lg shadow-lg">
                {t.footer.form.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
              <Stethoscope size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">KATYA CARE</span>
          </div>
          <p className="text-slate-500 text-sm">
            {t.footer.rights}
          </p>
          <div className="flex gap-6">
             <a href="#" className="text-slate-400 hover:text-cyan-600 transition-colors">Instagram</a>
             <a href="#" className="text-slate-400 hover:text-cyan-600 transition-colors">WhatsApp</a>
             <a href="#" className="text-slate-400 hover:text-cyan-600 transition-colors">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
