
import { Translation, Language } from './types';

export const translations: Record<Language, Translation> = {
  en: {
    hero: {
      headline: "Medical & Aesthetic Care at the Highest Level — With Personal Guidance",
      subHeadline: "Dental and aesthetic treatments in Belarus, with top providers, significant savings, and full personal support.",
      cta: "Schedule a Consultation"
    },
    nav: {
      services: "Services",
      whyBelarus: "Why Belarus?",
      whyKatya: "Why KATYA CARE?",
      howItWorks: "How It Works",
      testimonials: "Testimonials",
      about: "About",
      contact: "Contact Us"
    },
    services: {
      title: "Our Premium Services",
      dental: { title: "Advanced Dental Treatments", desc: "From implants to full aesthetic restorations with cutting-edge technology." },
      aesthetic: { title: "Aesthetic & Beauty Procedures", desc: "Non-invasive and surgical procedures for your perfect look." },
      planning: { title: "Personal Treatment Planning", desc: "Tailored medical journeys designed by experts specifically for you." },
      coordination: { title: "Full Medical Coordination", desc: "We bridge the gap between you and the best clinics seamlessly." }
    },
    whyBelarus: {
      title: "Why Choose Belarus?",
      professionals: { title: "Highly Trained Professionals", desc: "Top-tier surgeons and doctors with international experience." },
      modernClinics: { title: "Modern Technology", desc: "State-of-the-art facilities equipped with the latest medical tech." },
      standards: { title: "European Standards", desc: "Full compliance with high European medical protocols." },
      savings: { title: "Significant Savings", desc: "Get premium results at a fraction of the cost in other countries." },
      tourism: { title: "Proven Destination", desc: "A trusted hub for medical tourism in Eastern Europe." }
    },
    whyKatya: {
      title: "Why KATYA CARE?",
      points: [
        "Personal guidance in your language",
        "Carefully vetted providers only",
        "Full transparency at every step",
        "End-to-end coordination",
        "Peace of mind and confidence"
      ]
    },
    howItWorks: {
      title: "Your Journey with Us",
      steps: [
        { title: "Initial Consultation", desc: "We discuss your needs and medical history via video or phone." },
        { title: "Treatment Planning", desc: "You receive a detailed plan including costs and timelines." },
        { title: "Clinic Coordination", desc: "We handle all logistics, appointments, and travel advice." },
        { title: "Support", desc: "Ongoing personal assistance throughout the treatment and recovery." }
      ]
    },
    testimonials: {
      title: "Client Experiences",
      note: "All testimonials are from real clients",
      items: [
        { quote: "Professional, caring, and completely transparent. I felt safe every step of the way.", name: "Sarit L.", country: "Israel" },
        { quote: "The quality of the dental work exceeded my expectations. Saving money was a huge bonus.", name: "Mark K.", country: "Germany" },
        { quote: "Katya made everything so easy. I didn't have to worry about a thing while abroad.", name: "Elena R.", country: "USA" }
      ]
    },
    trust: {
      title: "Trust & Credibility",
      points: [
        "Working only with licensed clinics",
        "Compliance with international medical standards",
        "Confidentiality and privacy guaranteed",
        "Extensive international patient experience"
      ]
    },
    about: {
      title: "About KATYA CARE",
      content: "KATYA CARE was created to combine medical excellence, aesthetics, and human-centered care — with trust, professionalism, and clarity at the core. We act as your trusted bridge to world-class medical providers."
    },
    footer: {
      ctaTitle: "Start Your Medical Journey With Confidence",
      form: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
        lang: "Preferred Language",
        treatment: "Type of Treatment",
        submit: "Contact Us"
      },
      rights: "© 2024 KATYA CARE. All Rights Reserved."
    }
  },
  he: {
    hero: {
      headline: "טיפול רפואי ואסתטי ברמה הגבוהה ביותר – בליווי אישי",
      subHeadline: "טיפולי שיניים ואסתטיקה בבלארוס, עם ספקים מובילים, חיסכון משמעותי ותמיכה אישית מלאה.",
      cta: "קבעו פגישת ייעוץ"
    },
    nav: {
      services: "שירותים",
      whyBelarus: "למה בלארוס?",
      whyKatya: "למה KATYA CARE?",
      howItWorks: "איך זה עובד?",
      testimonials: "המלצות",
      about: "אודות",
      contact: "צור קשר"
    },
    services: {
      title: "השירותים היוקרתיים שלנו",
      dental: { title: "טיפולי שיניים מתקדמים", desc: "מהשתלות ועד שיקום אסתטי מלא עם הטכנולוגיה החדישה ביותר." },
      aesthetic: { title: "טיפולים אסתטיים ויופי", desc: "הליכים כירורגיים ולא פולשניים למראה מושלם." },
      planning: { title: "תכנון טיפול אישי", desc: "מסע רפואי מותאם אישית שנבנה על ידי מומחים עבורך." },
      coordination: { title: "תיאום רפואי מלא", desc: "אנחנו מגשרים על הפער בינך לבין המרפאות הטובות ביותר ללא מאמץ." }
    },
    whyBelarus: {
      title: "למה לבחור בבלארוס?",
      professionals: { title: "אנשי מקצוע מיומנים", desc: "מנתחים ורופאים מהשורה הראשונה עם ניסיון בינלאומי." },
      modernClinics: { title: "טכנולוגיה מודרנית", desc: "מתקנים חדישים המצוידים בטכנולוגיה הרפואית האחרונה." },
      standards: { title: "סטנדרטים אירופאיים", desc: "עמידה מלאה בפרוטוקולים רפואיים אירופאיים גבוהים." },
      savings: { title: "חיסכון משמעותי", desc: "תוצאות פרימיום בשבריר מהעלות במדינות אחרות." },
      tourism: { title: "יעד מוכח", desc: "מרכז אמין לתיירות מרפא במזרח אירופה." }
    },
    whyKatya: {
      title: "למה KATYA CARE?",
      points: [
        "ליווי אישי בשפה שלך",
        "ספקים שנבחרו בקפידה בלבד",
        "שקיפות מלאה בכל שלב",
        "תיאום מקצה לקצה",
        "שקט נפשי וביטחון"
      ]
    },
    howItWorks: {
      title: "המסע שלך איתנו",
      steps: [
        { title: "ייעוץ ראשוני", desc: "נשוחח על הצרכים וההיסטוריה הרפואית שלך בווידאו או בטלפון." },
        { title: "תכנון טיפול", desc: "תקבלו תוכנית מפורטת הכוללת עלויות ולוחות זמנים." },
        { title: "תיאום מול המרפאה", desc: "אנחנו מטפלים בכל הלוגיסטיקה, התורים וייעוץ הנסיעות." },
        { title: "תמיכה שוטפת", desc: "סיוע אישי רציף לאורך כל הטיפול וההחלמה." }
      ]
    },
    testimonials: {
      title: "חוויות של לקוחות",
      note: "כל ההמלצות הן מלקוחות אמיתיים",
      items: [
        { quote: "מקצועי, אכפתי ושקוף לחלוטין. הרגשתי בטוחה בכל שלב בדרך.", name: "שרית ל.", country: "ישראל" },
        { quote: "איכות עבודת השיניים עלתה על הציפיות שלי. החיסכון הכספי היה בונוס עצום.", name: "מרק ק.", country: "גרמניה" },
        { quote: "קטיה הפכה הכל לכל כך קל. לא הייתי צריכה לדאוג לכלום בזמן שהותי בחו\"ל.", name: "ילנה ר.", country: "ארה\"ב" }
      ]
    },
    trust: {
      title: "אמון ואמינות",
      points: [
        "עבודה עם מרפאות מורשות בלבד",
        "עמידה בתקנים רפואיים בינלאומיים",
        "סודיות ופרטיות מובטחות",
        "ניסיון רב עם מטופלים בינלאומיים"
      ]
    },
    about: {
      title: "אודות KATYA CARE",
      content: "KATYA CARE הוקמה כדי לשלב מצוינות רפואית, אסתטיקה וטיפול ממוקד באדם – עם אמון, מקצועיות ובהירות בבסיס הכל. אנחנו הגשר הנאמן שלך לספקי רפואה ברמה עולמית."
    },
    footer: {
      ctaTitle: "התחילו את המסע הרפואי שלכם בביטחון",
      form: {
        name: "שם מלא",
        phone: "מספר טלפון",
        email: "כתובת אימייל",
        lang: "שפה מועדפת",
        treatment: "סוג טיפול",
        submit: "צור קשר"
      },
      rights: "© 2024 KATYA CARE. כל הזכויות שמורות."
    }
  },
  ru: {
    hero: {
      headline: "Медицинский и эстетический уход на высшем уровне — с персональным сопровождением",
      subHeadline: "Стоматологическое и эстетическое лечение в Беларуси: ведущие специалисты, значительная экономия и полная личная поддержка.",
      cta: "Записаться на консультацию"
    },
    nav: {
      services: "Услуги",
      whyBelarus: "Почему Беларусь?",
      whyKatya: "Почему KATYA CARE?",
      howItWorks: "Как это работает?",
      testimonials: "Отзывы",
      about: "О нас",
      contact: "Контакты"
    },
    services: {
      title: "Наши Премиум-услуги",
      dental: { title: "Современная стоматология", desc: "От имплантации до полной эстетической реставрации с использованием новейших технологий." },
      aesthetic: { title: "Эстетика и красота", desc: "Хирургические и неинвазивные процедуры для вашего идеального образа." },
      planning: { title: "Индивидуальное планирование", desc: "Персонализированные медицинские туры, разработанные экспертами специально для вас." },
      coordination: { title: "Полная координация", desc: "Мы обеспечиваем бесшовную связь между вами и лучшими клиниками." }
    },
    whyBelarus: {
      title: "Почему стоит выбрать Беларусь?",
      professionals: { title: "Высококвалифицированные врачи", desc: "Хирурги и специалисты мирового уровня с международным опытом." },
      modernClinics: { title: "Современное оборудование", desc: "Клиники, оснащенные по последнему слову медицинской техники." },
      standards: { title: "Европейские стандарты", desc: "Полное соответствие строгим европейским медицинским протоколам." },
      savings: { title: "Существенная экономия", desc: "Премиальный результат за долю стоимости лечения в других странах." },
      tourism: { title: "Проверенное направление", desc: "Надежный хаб медицинского туризма в Восточной Европе." }
    },
    whyKatya: {
      title: "Почему KATYA CARE?",
      points: [
        "Личное сопровождение на вашем языке",
        "Только тщательно проверенные клиники",
        "Полная прозрачность на каждом этапе",
        "Координация «под ключ»",
        "Спокойствие и уверенность в результате"
      ]
    },
    howItWorks: {
      title: "Ваш путь с нами",
      steps: [
        { title: "Первичная консультация", desc: "Обсуждаем ваши цели и историю болезни по видеосвязи или телефону." },
        { title: "Разработка плана", desc: "Вы получаете детальный план лечения с указанием стоимости и сроков." },
        { title: "Координация с клиникой", desc: "Мы берем на себя всю логистику, запись к врачам и советы по поездке." },
        { title: "Сопровождение", desc: "Постоянная поддержка на протяжении всего лечения и реабилитации." }
      ]
    },
    testimonials: {
      title: "Отзывы клиентов",
      note: "Все отзывы получены от реальных пациентов",
      items: [
        { quote: "Профессионально, заботливо и абсолютно прозрачно. Я чувствовала себя в безопасности на каждом этапе.", name: "Сарит Л.", country: "Израиль" },
        { quote: "Качество стоматологических услуг превзошло мои ожидания. Экономия стала приятным бонусом.", name: "Марк К.", country: "Германия" },
        { quote: "С Катей всё было так просто. Мне не пришлось ни о чем беспокоиться во время поездки.", name: "Елена Р.", country: "США" }
      ]
    },
    trust: {
      title: "Доверие и репутация",
      points: [
        "Работа только с лицензированными клиниками",
        "Соблюдение международных медицинских стандартов",
        "Гарантия конфиденциальности и защиты данных",
        "Обширный опыт работы с иностранными пациентами"
      ]
    },
    about: {
      title: "О проекте KATYA CARE",
      content: "Проект KATYA CARE был создан, чтобы объединить медицинское превосходство, эстетику и человекоцентричный подход. В основе нашей работы лежат доверие, профессионализм и ясность."
    },
    footer: {
      ctaTitle: "Начните свое медицинское путешествие с уверенностью",
      form: {
        name: "ФИО",
        phone: "Номер телефона",
        email: "Электронная почта",
        lang: "Предпочтительный язык",
        treatment: "Вид лечения",
        submit: "Связаться с нами"
      },
      rights: "© 2024 KATYA CARE. Все права защищены."
    }
  }
};
