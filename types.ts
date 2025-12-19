
export type Language = 'en' | 'he' | 'ru';

export interface Translation {
  hero: {
    headline: string;
    subHeadline: string;
    cta: string;
  };
  nav: {
    services: string;
    whyBelarus: string;
    whyKatya: string;
    howItWorks: string;
    testimonials: string;
    about: string;
    contact: string;
  };
  services: {
    title: string;
    dental: { title: string; desc: string };
    aesthetic: { title: string; desc: string };
    planning: { title: string; desc: string };
    coordination: { title: string; desc: string };
  };
  whyBelarus: {
    title: string;
    professionals: { title: string; desc: string };
    modernClinics: { title: string; desc: string };
    standards: { title: string; desc: string };
    savings: { title: string; desc: string };
    tourism: { title: string; desc: string };
  };
  whyKatya: {
    title: string;
    points: string[];
  };
  howItWorks: {
    title: string;
    steps: { title: string; desc: string }[];
  };
  testimonials: {
    title: string;
    note: string;
    items: { quote: string; name: string; country: string }[];
  };
  trust: {
    title: string;
    points: string[];
  };
  about: {
    title: string;
    content: string;
  };
  footer: {
    ctaTitle: string;
    form: {
      name: string;
      phone: string;
      email: string;
      lang: string;
      treatment: string;
      submit: string;
    };
    rights: string;
  };
}
