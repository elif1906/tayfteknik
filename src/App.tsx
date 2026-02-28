import { useEffect, useState } from 'react'

type Language = 'tr' | 'en'

const Logo = () => (
  <svg className="h-10 w-10" viewBox="0 0 48 48" role="img" aria-label="TayfTeknik logo">
    <defs>
      <linearGradient id="logoGradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#3fb6ff" />
        <stop offset="100%" stopColor="#0c78d1" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="22" fill="url(#logoGradient)" />
    <path
      d="M24 11c-5 5-7.5 9.5-7.5 14.2a7.5 7.5 0 1 0 15 0c0-4.7-2.5-9.2-7.5-14.2z"
      fill="#ffffff"
      opacity="0.92"
    />
    <path
      d="M24 18.5c-2.8 2.8-4.1 5.2-4.1 7.3a4.1 4.1 0 1 0 8.2 0c0-2.1-1.3-4.5-4.1-7.3z"
      fill="#0c78d1"
      opacity="0.95"
    />
  </svg>
)

const translations = {
  tr: {
    brandSubtitle: 'Doğalgaz & Kombi Servisi',
    navLinks: [
      { label: 'Hizmetler', href: '#services' },
      { label: 'Süreç', href: '#process' },
      { label: 'Referanslar', href: '#references' },
      { label: 'İletişim', href: '#contact' },
    ],
    hero: {
      badge: '7/24 Acil Doğalgaz Servisi',
      title: 'Güvenli ve modern doğalgaz çözümleri ile eviniz hep sıcak.',
      subtitle:
        'TayfTeknik, doğalgaz tesisatı, kombi bakım ve acil müdahale hizmetlerinde sertifikalı ekibiyle İstanbul genelinde hızlı ve güvenilir servis sunar.',
      primaryCta: 'Ücretsiz Keşif Al',
      secondaryCta: '0 (506) 369 76 93',
      stats: [
        { value: '15+ yıl', label: 'Saha tecrübesi' },
        { value: '2.500+', label: 'Mutlu müşteri' },
        { value: '45 dk', label: 'Ortalama müdahale' },
      ],
    },
    quickCard: {
      eyebrow: 'Hızlı Servis Planlama',
      title: 'Bugün içinde servis randevusu oluşturun.',
      description: 'Formu doldurun, keşif ekibimiz 30 dakika içinde sizinle iletişime geçsin.',
      items: [
        { label: 'Hizmet Türü', value: 'Kombi Bakımı' },
        { label: 'Ortalama Süre', value: '60 dakika' },
        { label: 'Garanti', value: '12 ay' },
      ],
      cta: 'Formu Doldur',
    },
    services: {
      eyebrow: 'Hizmetler',
      title: 'Doğalgazın her adımında yanınızdayız.',
      description:
        'Ev ve işletmeler için güvenli tesisat, verimli ısıtma ve uzun ömürlü sistemler sunuyoruz.',
      items: [
        {
          title: 'Doğalgaz Tesisatı',
          description: 'Yeni tesisat kurulumları, proje çizimi ve güvenli gaz hattı uygulamaları.',
        },
        {
          title: 'Kombi Bakım & Onarım',
          description: 'Verimli çalışma için detaylı bakım, arıza tespiti ve hızlı müdahale.',
        },
        {
          title: 'Petek Temizliği',
          description: 'Isı verimini artıran kimyasal temizleme ve tortu giderme.',
        },
        {
          title: 'Gaz Kaçağı Tespiti',
          description: 'Dedektörle kaçak tespiti, raporlama ve acil güvenlik önlemleri.',
        },
        {
          title: 'Kombi Montajı',
          description: 'Yetkili montaj, baca düzeni ve garantiye uygun kurulum hizmeti.',
        },
        {
          title: 'Proje & Danışmanlık',
          description: 'Yeni bina ve işletmeler için keşif, proje ve ruhsat desteği.',
        },
      ],
    },
    process: {
      eyebrow: 'Süreç',
      title: 'Sorunsuz servis deneyimi.',
      description: 'Tüm hizmetlerimizde net planlama ve şeffaf iletişim sunarız.',
      stepLabel: 'Adım',
      steps: [
        {
          title: 'Keşif ve Analiz',
          description: 'Adresinize gelip sistemi inceler, ihtiyaçları netleştiririz.',
        },
        {
          title: 'Uygulama ve Test',
          description: 'Güvenli montaj yapar, tüm kaçak ve performans testlerini tamamlarız.',
        },
        {
          title: 'Teslim ve Destek',
          description: 'Teslim sonrası bakım takvimi ve 7/24 destek hattı sağlarız.',
        },
      ],
    },
    why: {
      eyebrow: 'Neden TayfTeknik?',
      title: 'Güvenlik, hız ve kaliteyi birleştiriyoruz.',
      description: 'Geniş servis ağımız ve deneyimli ekibimizle sorunsuz bir doğalgaz deneyimi sunuyoruz.',
      highlights: [
        { title: 'Sertifikalı Ustalar', description: 'Yetkili ve eğitimli ekiplerle güvenli uygulama.' },
        { title: 'Hızlı Müdahale', description: 'İstanbul geneline aynı gün servis imkanı.' },
        { title: 'Şeffaf Fiyatlama', description: 'Net keşif sonrası sürpriz masraf yok.' },
        { title: 'Garanti Takibi', description: 'Montaj ve onarımlarda yazılı garanti.' },
      ],
      emergencyTitle: 'Acil servis hattı',
      emergencyDescription:
        'Kaçak şüphesi, kombi arızası veya tesisat sorunu yaşadığınızda tek tuşla bize ulaşın.',
      emergencyCta: 'Acil Destek Talebi',
      hoursLabel: 'Çalışma Saatleri',
      hoursValue: 'Pazartesi - Pazar 08:00 - 23:00',
      callLabel: 'Hemen Arayın',
    },
    references: {
      eyebrow: 'Referanslar',
      title: 'Müşterilerimiz ne diyor?',
      description: 'Hizmet kalitemizi deneyimleyenlerin yorumları.',
      testimonials: [
        {
          name: 'Ayşe K.',
          role: 'Kadıköy',
          quote: 'Kombi bakımını aynı gün yaptılar. Hem hızlı hem çok temiz çalıştılar.',
        },
        {
          name: 'Mert T.',
          role: 'Ümraniye',
          quote: 'Petek temizliği sonrası evdeki ısı farkını hemen hissettik.',
        },
        {
          name: 'Selin D.',
          role: 'Ataşehir',
          quote: 'Kaçak tespiti ve onarım çok profesyoneldi. Ekibi gönül rahatlığıyla öneririm.',
        },
      ],
    },
    faq: {
      eyebrow: 'Sık Sorulan Sorular',
      title: 'Hızlıca bilgi alın.',
      items: [
        {
          question: 'Servis süresi ne kadar?',
          answer: 'Keşif sonrası işlemler 1-3 saat içinde tamamlanır, acil durumlarda anında müdahale ederiz.',
        },
        {
          question: 'Garanti veriyor musunuz?',
          answer: 'Tüm montaj ve bakım hizmetlerimizde yazılı garanti sunuyoruz.',
        },
        {
          question: 'Hangi bölgelerde hizmet var?',
          answer: 'İstanbul Avrupa ve Anadolu yakasında hizmet veriyoruz.',
        },
      ],
    },
    contact: {
      eyebrow: 'İletişim',
      title: 'İster keşif, ister acil destek.',
      description: 'Hızlı teklif için formu doldurun ya da doğrudan arayın. Size en kısa sürede dönüş yaparız.',
      phoneLabel: 'Telefon',
      emailLabel: 'E-posta',
      addressLabel: 'Adres',
      formTitle: 'Ücretsiz keşif formu',
      formDescription: 'Bilgilerinizi bırakın, servis ekibimiz sizi arasın.',
      fields: {
        name: 'Ad Soyad',
        phone: 'Telefon',
        service: 'Hizmet türü',
        message: 'Kısaca ihtiyacınızı yazın',
      },
      submit: 'Talep Gönder',
    },
    footer: {
      description: 'Doğalgaz tesisatı ve kombi servisinde uzman ekip.',
      credit: '2026 TayfTeknik tarafından yapılmış.',
    },
    cta: {
      primary: 'Hemen Teklif Al',
    },
    language: {
      label: 'Dil',
      menu: 'Menüyü aç',
      tr: 'TR',
      en: 'EN',
    },
    theme: {
      label: 'Tema',
      light: 'Açık',
      dark: 'Koyu',
      toggle: 'Temayı değiştir',
    },
  },
  en: {
    brandSubtitle: 'Natural Gas & Boiler Service',
    navLinks: [
      { label: 'Services', href: '#services' },
      { label: 'Process', href: '#process' },
      { label: 'References', href: '#references' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      badge: '24/7 Emergency Gas Service',
      title: 'Modern and safe natural gas solutions to keep your home warm.',
      subtitle:
        'TayfTeknik delivers certified installation, boiler maintenance, and emergency response across Istanbul with fast, reliable service.',
      primaryCta: 'Request Free Inspection',
      secondaryCta: '0 (506) 369 76 93',
      stats: [
        { value: '15+ years', label: 'Field experience' },
        { value: '2,500+', label: 'Happy customers' },
        { value: '45 min', label: 'Average response' },
      ],
    },
    quickCard: {
      eyebrow: 'Fast Service Planning',
      title: 'Book your service appointment today.',
      description: 'Leave your details and our team will contact you within 30 minutes.',
      items: [
        { label: 'Service Type', value: 'Boiler Maintenance' },
        { label: 'Average Duration', value: '60 minutes' },
        { label: 'Warranty', value: '12 months' },
      ],
      cta: 'Fill Out the Form',
    },
    services: {
      eyebrow: 'Services',
      title: 'We cover every step of natural gas systems.',
      description: 'Safe installations, efficient heating, and long-lasting systems for homes and businesses.',
      items: [
        {
          title: 'Gas Installation',
          description: 'New installations, project design, and safe gas line applications.',
        },
        {
          title: 'Boiler Maintenance & Repair',
          description: 'Detailed maintenance, fault detection, and rapid on-site repair.',
        },
        {
          title: 'Radiator Cleaning',
          description: 'Chemical cleaning to increase heating efficiency and remove residue.',
        },
        {
          title: 'Gas Leak Detection',
          description: 'Detector-based leak inspection, reporting, and emergency safety actions.',
        },
        {
          title: 'Boiler Installation',
          description: 'Authorized setup with proper flue adjustment and warranty compliance.',
        },
        {
          title: 'Project & Consulting',
          description: 'Survey, project, and licensing support for new buildings and businesses.',
        },
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'A seamless service experience.',
      description: 'We keep every step clear with transparent planning and communication.',
      stepLabel: 'Step',
      steps: [
        {
          title: 'Survey & Analysis',
          description: 'We visit your location, inspect the system, and clarify needs.',
        },
        {
          title: 'Application & Testing',
          description: 'We install safely and complete leak plus performance tests.',
        },
        {
          title: 'Handover & Support',
          description: 'We deliver and provide ongoing maintenance scheduling and 24/7 support.',
        },
      ],
    },
    why: {
      eyebrow: 'Why TayfTeknik?',
      title: 'We combine safety, speed, and quality.',
      description: 'With a wide service network and experienced team, we ensure a smooth gas experience.',
      highlights: [
        { title: 'Certified Technicians', description: 'Authorized, trained teams for safe work.' },
        { title: 'Rapid Response', description: 'Same-day service across Istanbul.' },
        { title: 'Transparent Pricing', description: 'No hidden costs after inspection.' },
        { title: 'Warranty Tracking', description: 'Written warranty on installations and repairs.' },
      ],
      emergencyTitle: 'Emergency hotline',
      emergencyDescription: 'Reach us instantly for leaks, boiler failures, or urgent issues.',
      emergencyCta: 'Request Emergency Support',
      hoursLabel: 'Working Hours',
      hoursValue: 'Monday - Sunday 08:00 - 23:00',
      callLabel: 'Call Now',
    },
    references: {
      eyebrow: 'References',
      title: 'What do our customers say?',
      description: 'Reviews from clients who experienced our service quality.',
      testimonials: [
        {
          name: 'Ayşe K.',
          role: 'Kadıköy',
          quote: 'They handled boiler maintenance the same day. Fast and very tidy.',
        },
        {
          name: 'Mert T.',
          role: 'Ümraniye',
          quote: 'We felt the heating difference right after the radiator cleaning.',
        },
        {
          name: 'Selin D.',
          role: 'Ataşehir',
          quote: 'Leak detection and repair were highly professional. I fully recommend them.',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Get quick answers.',
      items: [
        {
          question: 'How long does service take?',
          answer: 'After inspection, services are completed in 1-3 hours; emergencies get immediate response.',
        },
        {
          question: 'Do you provide warranty?',
          answer: 'We provide written warranty for all installation and maintenance services.',
        },
        {
          question: 'Which areas do you serve?',
          answer: 'We serve both European and Asian sides of Istanbul.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Inspection or emergency support.',
      description: 'Fill out the form or call us directly. We will get back to you quickly.',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      addressLabel: 'Address',
      formTitle: 'Free inspection form',
      formDescription: 'Leave your details and our team will call you.',
      fields: {
        name: 'Full name',
        phone: 'Phone',
        service: 'Service type',
        message: 'Briefly describe your need',
      },
      submit: 'Send Request',
    },
    footer: {
      description: 'Expert team for gas installation and boiler service.',
      credit: 'Made by TayfTeknik in 2026.',
    },
    cta: {
      primary: 'Get a Quote',
    },
    language: {
      label: 'Language',
      menu: 'Open menu',
      tr: 'TR',
      en: 'EN',
    },
    theme: {
      label: 'Theme',
      light: 'Light',
      dark: 'Dark',
      toggle: 'Toggle theme',
    },
  },
} as const

const contactInfo = {
  phone: '0 (506) 369 76 93',
  email: 'info@tayfteknik.com',
  address: 'Kozyatağı Mah. Enerji Sok. No:12, Kadıköy / İstanbul',
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<Language>('tr')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const content = translations[language]

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div id="top" className="bg-ink-50 text-ink-900 dark:bg-ink-900 dark:text-ink-50">
      <header className="sticky top-0 z-20 border-b border-ink-100 bg-white/80 backdrop-blur transition-shadow duration-300 hover:shadow-soft dark:border-ink-800 dark:bg-ink-900/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a className="flex items-center gap-3" href="#top">
            <Logo />
            <div>
              <p className="text-lg font-semibold">TayfTeknik</p>
              <p className="text-sm text-ink-500 dark:text-ink-400">{content.brandSubtitle}</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-ink-600 md:flex dark:text-ink-300">
            {content.navLinks.map((link) => (
              <a
                key={link.href}
                className="relative transition hover:text-ink-900 dark:hover:text-white"
                href={link.href}
              >
                <span className="after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label={content.theme.toggle}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-600 transition hover:border-brand-200 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300"
            >
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.7-6.3 1.4-1.4M4.9 19.1l1.4-1.4m0-11.4L4.9 4.9m14.2 14.2-1.4-1.4M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M20 14.5A8 8 0 0 1 9.5 4 7 7 0 1 0 20 14.5Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            <div className="flex items-center rounded-full border border-ink-200 bg-white p-1 text-xs font-semibold text-ink-600 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300">
              <button
                type="button"
                onClick={() => setLanguage('tr')}
                className={`rounded-full px-3 py-1 transition ${
                  language === 'tr' ? 'bg-brand-600 text-white' : 'hover:text-ink-900 dark:hover:text-white'
                }`}
              >
                {content.language.tr}
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`rounded-full px-3 py-1 transition ${
                  language === 'en' ? 'bg-brand-600 text-white' : 'hover:text-ink-900 dark:hover:text-white'
                }`}
              >
                {content.language.en}
              </button>
            </div>
            <a
              className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
              href="#contact"
            >
              {content.cta.primary}
            </a>
          </div>
          <button
            className="rounded-2xl border border-ink-200 p-2 text-ink-700 transition hover:border-brand-200 hover:text-brand-700 md:hidden dark:border-ink-700 dark:text-ink-300"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">{content.language.menu}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-ink-100 bg-white md:hidden dark:border-ink-800 dark:bg-ink-900"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 text-sm text-ink-700 dark:text-ink-300">
              {content.navLinks.map((link) => (
                <a
                  key={link.href}
                  className="rounded-xl px-3 py-2 transition hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-ink-800"
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex items-center justify-between rounded-2xl border border-ink-200 bg-ink-50 px-4 py-2 text-sm font-semibold text-ink-700 transition hover:border-brand-200 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200"
              >
                <span>{content.theme.label}</span>
                <span className="text-xs font-semibold">
                  {theme === 'dark' ? content.theme.dark : content.theme.light}
                </span>
              </button>
              <div className="flex items-center gap-2 rounded-2xl border border-ink-200 bg-ink-50 p-2 dark:border-ink-700 dark:bg-ink-800">
                <button
                  type="button"
                  onClick={() => setLanguage('tr')}
                  className={`flex-1 rounded-full px-3 py-2 text-xs font-semibold transition ${
                    language === 'tr' ? 'bg-brand-600 text-white' : 'text-ink-600 dark:text-ink-300'
                  }`}
                >
                  {content.language.tr}
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`flex-1 rounded-full px-3 py-2 text-xs font-semibold transition ${
                    language === 'en' ? 'bg-brand-600 text-white' : 'text-ink-600 dark:text-ink-300'
                  }`}
                >
                  {content.language.en}
                </button>
              </div>
              <a
                className="rounded-full bg-brand-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                {content.cta.primary}
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="bg-gradient-to-br from-brand-50 via-white to-ink-50 dark:from-ink-900 dark:via-ink-900 dark:to-ink-800">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-700/30 dark:text-brand-200">
                {content.hero.badge}
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl dark:text-ink-50">
                {content.hero.title}
              </h1>
              <p className="mt-5 text-base text-ink-600 sm:text-lg dark:text-ink-300">
                {content.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
                  href="#contact"
                >
                  {content.hero.primaryCta}
                </a>
                <a
                  className="rounded-full border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-700 transition hover:border-brand-200 hover:text-brand-700 dark:border-ink-600 dark:text-ink-200"
                  href="tel:05063697693"
                >
                  {content.hero.secondaryCta}
                </a>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {content.hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-semibold text-ink-900 dark:text-ink-50">{stat.value}</p>
                    <p className="text-sm text-ink-500 dark:text-ink-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card flex flex-col justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-brand-700">{content.quickCard.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-semibold text-ink-900 dark:text-ink-50">
                  {content.quickCard.title}
                </h2>
                <p className="mt-3 text-sm text-ink-600 dark:text-ink-300">
                  {content.quickCard.description}
                </p>
              </div>
              <div className="grid gap-3 text-sm text-ink-600 dark:text-ink-300">
                {content.quickCard.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl border border-ink-100 bg-ink-50 px-4 py-3 dark:border-ink-700 dark:bg-ink-900"
                  >
                    <span>{item.label}</span>
                    <span className="font-semibold text-ink-800 dark:text-ink-50">{item.value}</span>
                  </div>
                ))}
              </div>
              <a
                className="rounded-2xl bg-ink-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-ink-800"
                href="#contact"
              >
                {content.quickCard.cta}
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold text-brand-700">{content.services.eyebrow}</p>
            <h2 className="section-title">{content.services.title}</h2>
            <p className="section-lead">{content.services.description}</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {content.services.items.map((service) => (
                <div key={service.title} className="card">
                  <h3 className="text-lg font-semibold text-ink-900 dark:text-ink-50">{service.title}</h3>
                  <p className="mt-3 text-sm text-ink-600 dark:text-ink-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-white py-16 dark:bg-ink-950">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold text-brand-700">{content.process.eyebrow}</p>
            <h2 className="section-title">{content.process.title}</h2>
            <p className="section-lead">{content.process.description}</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {content.process.steps.map((step, index) => (
                <div key={step.title} className="card">
                  <p className="text-sm font-semibold text-brand-700">
                    {content.process.stepLabel} {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-ink-900">{step.title}</h3>
                  <p className="mt-3 text-sm text-ink-600 dark:text-ink-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold text-brand-700">{content.why.eyebrow}</p>
                <h2 className="section-title">{content.why.title}</h2>
                <p className="section-lead">{content.why.description}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {content.why.highlights.map((highlight) => (
                    <div
                      key={highlight.title}
                      className="rounded-2xl border border-ink-100 bg-white p-4 dark:border-ink-700 dark:bg-ink-800"
                    >
                      <h3 className="text-sm font-semibold text-ink-900 dark:text-ink-50">
                        {highlight.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">
                        {highlight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-ink-900">{content.why.emergencyTitle}</h3>
                <p className="mt-3 text-sm text-ink-600 dark:text-ink-300">
                  {content.why.emergencyDescription}
                </p>
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-brand-100 bg-brand-50 px-4 py-3 dark:border-brand-700/40 dark:bg-ink-900">
                    <p className="text-xs font-semibold text-brand-700">{content.why.callLabel}</p>
                    <p className="text-lg font-semibold text-ink-900 dark:text-ink-50">{contactInfo.phone}</p>
                  </div>
                  <div className="rounded-2xl border border-ink-100 bg-white px-4 py-3 dark:border-ink-700 dark:bg-ink-900">
                    <p className="text-xs font-semibold text-ink-500 dark:text-ink-400">
                      {content.why.hoursLabel}
                    </p>
                    <p className="text-sm font-semibold text-ink-900 dark:text-ink-50">
                      {content.why.hoursValue}
                    </p>
                  </div>
                </div>
                <a
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
                  href="#contact"
                >
                  {content.why.emergencyCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="references" className="bg-white py-16 dark:bg-ink-950">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold text-brand-700">{content.references.eyebrow}</p>
            <h2 className="section-title">{content.references.title}</h2>
            <p className="section-lead">{content.references.description}</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {content.references.testimonials.map((testimonial) => (
                <div key={testimonial.name} className="card">
                  <p className="text-sm text-ink-600 dark:text-ink-300">“{testimonial.quote}”</p>
                  <div className="mt-5">
                    <p className="text-sm font-semibold text-ink-900 dark:text-ink-50">{testimonial.name}</p>
                    <p className="text-xs text-ink-500 dark:text-ink-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold text-brand-700">{content.faq.eyebrow}</p>
            <h2 className="section-title">{content.faq.title}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {content.faq.items.map((faqItem) => (
                <div
                  key={faqItem.question}
                  className="rounded-2xl border border-ink-100 bg-white p-5 dark:border-ink-700 dark:bg-ink-800"
                >
                  <p className="text-sm font-semibold text-ink-900 dark:text-ink-50">{faqItem.question}</p>
                  <p className="mt-3 text-sm text-ink-600 dark:text-ink-300">{faqItem.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-ink-900 py-16 text-white dark:bg-ink-950">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold text-brand-200">{content.contact.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{content.contact.title}</h2>
              <p className="mt-4 text-sm text-ink-200">{content.contact.description}</p>
              <div className="mt-8 space-y-4 text-sm">
                <div>
                  <p className="text-xs font-semibold text-brand-200">{content.contact.phoneLabel}</p>
                  <p className="text-lg font-semibold">{contactInfo.phone}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-200">{content.contact.emailLabel}</p>
                  <p className="text-base">{contactInfo.email}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-200">{content.contact.addressLabel}</p>
                  <p className="text-base">{contactInfo.address}</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 text-ink-900 dark:bg-ink-800 dark:text-ink-50">
              <h3 className="text-lg font-semibold">{content.contact.formTitle}</h3>
              <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{content.contact.formDescription}</p>
              <form className="mt-6 grid gap-4">
                <input
                  className="rounded-2xl border border-ink-200 px-4 py-3 text-sm dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100"
                  placeholder={content.contact.fields.name}
                  type="text"
                />
                <input
                  className="rounded-2xl border border-ink-200 px-4 py-3 text-sm dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100"
                  placeholder={content.contact.fields.phone}
                  type="tel"
                />
                <input
                  className="rounded-2xl border border-ink-200 px-4 py-3 text-sm dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100"
                  placeholder={content.contact.fields.service}
                  type="text"
                />
                <textarea
                  className="min-h-[120px] rounded-2xl border border-ink-200 px-4 py-3 text-sm dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100"
                  placeholder={content.contact.fields.message}
                />
                <button
                  className="rounded-2xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
                  type="button"
                >
                  {content.contact.submit}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink-100 bg-white dark:border-ink-800 dark:bg-ink-950">
        <div className="mx-auto flex flex-col items-start justify-between gap-6 px-6 py-8 text-sm text-ink-600 md:flex-row md:items-center dark:text-ink-300">
          <div>
            <p className="font-semibold text-ink-900 dark:text-ink-50">TayfTeknik</p>
            <p>{content.footer.description}</p>
            <p className="mt-2 text-xs text-ink-500 dark:text-ink-400">{content.footer.credit}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {content.navLinks.map((link) => (
              <a
                key={link.href}
                className="transition hover:text-ink-900 dark:hover:text-white"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  </div>
  )
}

export default App
