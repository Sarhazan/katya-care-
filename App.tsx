
import React, { useState, useEffect, useRef } from 'react';
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
  FileText,
  ChevronDown,
  Check
} from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('he');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopLangOpen, setIsDesktopLangOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const desktopLangRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  const t = translations[lang];
  const isRtl = lang === 'he';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopLangRef.current && !desktopLangRef.current.contains(event.target as Node)) {
        setIsDesktopLangOpen(false);
      }
      if (mobileLangRef.current && !mobileLangRef.current.contains(event.target as Node)) {
        setIsMobileLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const languages = [
    { code: 'en', native: 'English' },
    { code: 'he', native: 'עברית' },
    { code: 'ru', native: 'Русский' }
  ];

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    setIsDesktopLangOpen(false);
    setIsMobileLangOpen(false);
  };

  const NavLink = ({ href, children }: { href: string; children?: React.ReactNode }) => (
    <a 
      href={href} 
      className="text-slate-700 hover:text-cyan-700 font-semibold transition-colors"
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <div className={`min-h-screen font-sans bg-slate-50 ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-200/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-indigo-200/20 blur-[150px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-md border-b border-slate-200' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-cyan-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-cyan-200/50">
              <Stethoscope size={28} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">KATYA <span className="text-cyan-600">CARE</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="#services">{t.nav.services}</NavLink>
            <NavLink href="#why-belarus">{t.nav.whyBelarus}</NavLink>
            <NavLink href="#how-it-works">{t.nav.howItWorks}</NavLink>
            <NavLink href="#testimonials">{t.nav.testimonials}</NavLink>
            
            {/* Desktop Lang Switcher */}
            <div className="relative" ref={desktopLangRef}>
              <button 
                onClick={() => setIsDesktopLangOpen(!isDesktopLangOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 hover:border-cyan-600 hover:text-cyan-700 transition-all text-sm font-bold uppercase bg-white shadow-sm"
              >
                <Globe size={16} />
                {lang}
                <ChevronDown size={14} className={`transition-transform duration-200 ${isDesktopLangOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDesktopLangOpen && (
                <div className={`absolute top-full mt-2 w-48 glass rounded-2xl shadow-2xl overflow-hidden py-2 z-[60] animate-in fade-in zoom-in-95 duration-200 ${isRtl ? 'left-0' : 'right-0'}`}>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleLangChange(l.code as Language)}
                      className={`w-full flex items-center justify-between px-5 py-3 text-sm transition-colors hover:bg-cyan-50 ${lang === l.code ? 'text-cyan-700 font-bold bg-cyan-100/50' : 'text-slate-800'}`}
                    >
                      <span className="text-base">{l.native}</span>
                      {lang === l.code && <Check size={18} className="text-cyan-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="#contact" 
              className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-cyan-600 hover:shadow-xl hover:shadow-cyan-300 transition-all"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Menu Toggle Area */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Mobile Lang Switcher */}
            <div className="relative" ref={mobileLangRef}>
              <button 
                onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300 hover:border-cyan-600 transition-all text-xs font-bold uppercase bg-white shadow-sm"
              >
                <Globe size={14} />
                {lang}
                <ChevronDown size={12} />
              </button>
              {isMobileLangOpen && (
                <div className={`absolute top-full mt-2 w-40 glass rounded-xl shadow-2xl overflow-hidden py-1 z-[60] ${isRtl ? 'left-0' : 'right-0'}`}>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleLangChange(l.code as Language)}
                      className={`w-full flex items-center justify-between px-4 py-2 text-sm ${lang === l.code ? 'text-cyan-700 font-bold bg-cyan-50' : 'text-slate-800'}`}
                    >
                      <span>{l.native}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button className="p-2 text-slate-900 bg-white rounded-xl shadow-sm border border-slate-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full glass shadow-2xl flex flex-col p-8 gap-6 animate-in slide-in-from-top duration-300 border-t border-slate-200">
            <NavLink href="#services">{t.nav.services}</NavLink>
            <NavLink href="#why-belarus">{t.nav.whyBelarus}</NavLink>
            <NavLink href="#how-it-works">{t.nav.howItWorks}</NavLink>
            <NavLink href="#testimonials">{t.nav.testimonials}</NavLink>
            <a href="#contact" className="bg-cyan-600 text-white px-6 py-4 rounded-2xl font-bold text-center text-lg shadow-lg">
              {t.nav.contact}
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-20 md:pt-56 md:pb-32 px-4 futuristic-gradient">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-100 text-cyan-800 text-sm font-black border border-cyan-200 shadow-sm">
              <Sparkles size={18} />
              {lang === 'he' ? 'חוויה רפואית יוקרתית' : lang === 'ru' ? 'Премиальный медицинский опыт' : 'Premium Medical Experience'}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
              {t.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-xl leading-relaxed font-medium">
              {t.hero.subHeadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a href="#contact" className="px-10 py-5 bg-cyan-600 text-white rounded-2xl font-black text-xl hover:bg-cyan-700 hover:shadow-2xl hover:shadow-cyan-400/30 transition-all flex items-center justify-center gap-3 group">
                {t.hero.cta}
                <ChevronRight size={24} className={`transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`} />
              </a>
              <a href="#services" className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-black text-xl hover:border-cyan-500 hover:text-cyan-700 transition-all text-center shadow-sm">
                {t.nav.services}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200 to-indigo-100 rounded-[3rem] blur-3xl opacity-40 -z-10 animate-pulse"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white">
               <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Medical Center" 
                className="w-full h-full object-cover aspect-[4/3] scale-105 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -left-6 glass p-7 rounded-[2rem] shadow-2xl hidden md:block max-w-[240px] border border-white/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shadow-inner">
                  <ShieldCheck size={22} />
                </div>
                <span className="font-black text-slate-900 text-base">Verified Providers</span>
              </div>
              <p className="text-sm text-slate-700 font-semibold leading-tight">Only top-tier licensed clinics in Belarus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{t.services.title}</h2>
            <div className="h-2 w-32 bg-cyan-600 mx-auto rounded-full shadow-sm shadow-cyan-200"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <Award className="text-cyan-600" />, ...t.services.dental },
              { icon: <Sparkles className="text-cyan-600" />, ...t.services.aesthetic },
              { icon: <FileText className="text-cyan-600" />, ...t.services.planning },
              { icon: <MessageSquare className="text-cyan-600" />, ...t.services.coordination },
            ].map((service, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-200 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-100 transition-all group relative overflow-hidden">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-md group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-cyan-700 transition-colors">{service.title}</h3>
                <p className="text-slate-700 leading-relaxed text-base font-medium">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Belarus Section */}
      <section id="why-belarus" className="py-28 bg-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{t.whyBelarus.title}</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { icon: <Award />, ...t.whyBelarus.professionals },
              { icon: <Clock />, ...t.whyBelarus.modernClinics },
              { icon: <CheckCircle2 />, ...t.whyBelarus.standards },
              { icon: <Sparkles />, ...t.whyBelarus.savings },
              { icon: <MapPin />, ...t.whyBelarus.tourism },
            ].map((item, idx) => (
              <div key={idx} className={`p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-8 items-start ${idx === 4 ? 'lg:col-span-2' : ''} hover:shadow-xl transition-all duration-300`}>
                <div className="text-cyan-600 shrink-0 bg-cyan-50 p-4 rounded-2xl">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 40 })}
                </div>
                <div>
                  <h3 className="text-xl font-black mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-700 text-base font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why KATYA CARE Section */}
      <section className="py-28 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-600 opacity-20 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2 space-y-10">
            <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">{t.whyKatya.title}</h2>
            <ul className="space-y-6">
              {t.whyKatya.points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-5 text-xl text-slate-200 font-bold group">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    <CheckCircle2 size={20} />
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2">
             <div className="relative group p-4 border-4 border-cyan-500/30 rounded-[3rem]">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                  className="rounded-[2.5rem] shadow-[0_0_50px_rgba(8,145,178,0.3)] transition-all duration-700 hover:rotate-1" 
                  alt="Personal Support" 
                />
             </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{t.howItWorks.title}</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-[40px] left-0 w-full h-1 bg-slate-100 -z-0"></div>
            {t.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="relative z-10 text-center space-y-8 group">
                <div className="w-20 h-20 rounded-3xl bg-cyan-600 text-white flex items-center justify-center mx-auto shadow-2xl shadow-cyan-200 text-3xl font-black group-hover:scale-110 transition-transform duration-300">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-700 text-base font-semibold leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-28 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{t.testimonials.title}</h2>
            <p className="text-slate-600 italic font-bold text-lg">{t.testimonials.note}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {t.testimonials.items.map((item, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-white shadow-xl border border-slate-200 space-y-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex text-yellow-500 gap-1">
                    {[...Array(5)].map((_, i) => <Sparkles key={i} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-xl text-slate-800 font-bold leading-relaxed italic">"{item.quote}"</p>
                </div>
                <div className="flex items-center gap-5 pt-8 border-t border-slate-100">
                  <div className="w-16 h-16 rounded-full bg-slate-300 overflow-hidden border-4 border-cyan-50 shadow-md">
                    <img src={`https://i.pravatar.cc/150?u=${idx + 10}`} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg">{item.name}</h4>
                    <p className="text-sm text-cyan-700 font-black uppercase tracking-widest">{item.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">{t.about.title}</h2>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            {t.about.content}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden bg-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-cyan-100/30 rounded-full blur-[150px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              {t.footer.ctaTitle}
            </h2>
            <div className="space-y-10 pt-4">
               <div className="flex items-start gap-6">
                 <div className="w-16 h-16 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shrink-0 shadow-xl shadow-cyan-200">
                    <MessageSquare size={32} />
                 </div>
                 <div>
                    <h4 className="font-black text-slate-900 text-xl mb-1">Contact Us Directly</h4>
                    <p className="text-slate-700 font-bold">Our team speaks Hebrew, Russian, and English fluently.</p>
                 </div>
               </div>
               <div className="flex items-start gap-6">
                 <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xl shadow-indigo-200">
                    <ShieldCheck size={32} />
                 </div>
                 <div>
                    <h4 className="font-black text-slate-900 text-xl mb-1">Your Data is Secure</h4>
                    <p className="text-slate-700 font-bold">We respect your privacy and handle medical data with absolute care.</p>
                 </div>
               </div>
            </div>
          </div>
          <div className="bg-slate-50 p-10 md:p-14 rounded-[3.5rem] shadow-2xl border-2 border-white relative">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-cyan-600 text-white px-6 py-2 rounded-full text-sm font-black shadow-lg uppercase tracking-wider">Online 24/7</div>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-base font-black text-slate-800 block">{t.footer.form.name}</label>
                  <input type="text" className="w-full bg-white border-2 border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-600 outline-none transition-all font-bold text-slate-900 placeholder-slate-400" />
                </div>
                <div className="space-y-3">
                  <label className="text-base font-black text-slate-800 block">{t.footer.form.phone}</label>
                  <input type="tel" className="w-full bg-white border-2 border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-600 outline-none transition-all font-bold text-slate-900" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-base font-black text-slate-800 block">{t.footer.form.email}</label>
                <input type="email" className="w-full bg-white border-2 border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-600 outline-none transition-all font-bold text-slate-900" />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-base font-black text-slate-800 block">{t.footer.form.lang}</label>
                  <select className="w-full bg-white border-2 border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-600 outline-none transition-all font-bold text-slate-900 appearance-none">
                    <option>Hebrew</option>
                    <option>Russian</option>
                    <option>English</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-base font-black text-slate-800 block">{t.footer.form.treatment}</label>
                  <input type="text" className="w-full bg-white border-2 border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-600 outline-none transition-all font-bold text-slate-900" />
                </div>
              </div>
              <button className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl hover:bg-cyan-600 transition-all text-xl shadow-2xl hover:shadow-cyan-400/40">
                {t.footer.form.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
              <Stethoscope size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">KATYA CARE</span>
          </div>
          <p className="text-slate-700 text-base font-bold">
            {t.footer.rights}
          </p>
          <div className="flex gap-8">
             <a href="#" className="text-slate-600 hover:text-cyan-600 transition-all font-black text-sm uppercase tracking-widest">Instagram</a>
             <a href="#" className="text-slate-600 hover:text-cyan-600 transition-all font-black text-sm uppercase tracking-widest">WhatsApp</a>
             <a href="#" className="text-slate-600 hover:text-cyan-600 transition-all font-black text-sm uppercase tracking-widest">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
