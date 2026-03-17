import { useEffect, useState } from 'react'

type Language = 'tr' | 'en'

type NavLink = {
  label: string
  href: string
}

const Logo = () => (
  <img className="h-16 w-auto md:h-20" src="/logo.png" alt="TayfTeknik logo" />
)

const translations = {
  tr: {
    brandSubtitle: 'Kart Tamiri (PCB), Klima & Kombi Servisi',
    navLinks: [
      { label: 'Hizmetler', href: '#services' },
      { label: 'Referanslar', href: '#references' },
      { label: 'Blog', href: '/blog' },
      { label: 'İletişim', href: '#contact' },
    ],
    blog: {
      navLinks: [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'İletişim', href: '/#contact' },
      ],
      eyebrow: 'Blog',
      title: 'Kart tamiri (PCB), klima ve kombi rehberi',
      subtitle: 'Güvenli kullanım ve verimli bakım için ekibimizin pratik önerileri.',
      ctaPrimary: 'Servis Talebi Oluştur',
      ctaSecondary: 'Ana Sayfaya Dön',
      posts: [
        {
          title: 'Elektronik Kart (PCB) Arızası Nasıl Anlaşılır?',
          category: 'Kart Tamiri',
          readTime: '5 dk okuma',
          image:
            '/img/6.jpeg',
          imageAlt: 'Elektronik kart (PCB) tamiri',
          summary:
            'Kombi, klima ve diğer cihazlarda kart arızası; ekranda hata kodu, düzensiz çalışma veya hiç açılmama gibi belirtilerle kendini gösterebilir.',
          details:
            'Profesyonel arıza tespitinde kart üzerinde görsel kontrol, ölçüm, kısa devre ve bileşen testi yapılır. Doğru teşhis, gereksiz parça değişimini önler ve onarım süresini kısaltır.',
          tips: [
            'Cihaz sık sık reset atıyorsa hata kodunu not alın.',
            'Yanık kokusu veya is lekesi varsa cihazı kapatın.',
            'Kart tamiri öncesi voltaj dalgalanmasına karşı koruma kullanın.',
          ],
        },
        {
          title: 'Klima Bakımında Filtre Temizliği ve Enerji Tasarrufu',
          category: 'Klima',
          readTime: '4 dk okuma',
          image:
            '/img/2.jpeg',
          imageAlt: 'Klima iç ünitesi ve filtre temizliği',
          summary: 'Düzenli filtre temizliği, hem sağlıklı hava hem de düşük enerji tüketimi sunar. Klima bakımı yapılmadığında cihaz daha fazla enerji harcar ve ortam havası ağırlaşır.',
          details:
            'Ev tipi klimalarda iç ünite temizliği, koku oluşumunu azaltır ve alerjenleri filtreler. Ayrıca periyodik kontrol, yaz sezonuna daha güçlü bir performansla girmenizi sağlar.',
          tips: [
            'Filtreleri ayda bir temizleyin veya değiştirin.',
            'Sezon başında gaz basıncı ve drenaj hattını kontrol ettirin.',
            'Dış ünitenin çevresini kapatmayın, hava akışını açık bırakın.',
          ],
        },
        {
          title: 'Kombi Bakımında Verimlilik: Kışa Girmeden Yapılması Gerekenler',
          category: 'Kombi Bakım',
          readTime: '6 dk okuma',
          image:
            '/img/4.jpeg',
          imageAlt: 'Kombi bakım çalışması',
          summary: 'Periyodik bakım, ısınma performansını artırır ve cihaz ömrünü uzatır. Kombi bakımı yapılmadığında yakıt tüketimi artar ve arıza riski yükselir.',
          details:
            'Kışa girmeden önce yapılan kontroller, ısıtma verimini dengeler ve güvenli yanma sağlar. Bu sayede hem konforlu bir ısınma sağlanır hem de cihaz daha uzun ömürlü olur.',
          tips: [
            'Radyatör havasını alın ve peteklerin ısısını kontrol edin.',
            'Baca, fan ve yanma odası temizliğini mutlaka yaptırın.',
            'Basınç değerini 1.2-1.5 bar arasında tutun.',
          ],
        },
        {
          title: 'Petek Temizliği ile Isı Dağılımını Dengeleyin',
          category: 'Isıtma',
          readTime: '5 dk okuma',
          image:
            '/img/4.jpeg',
          imageAlt: 'Petek temizliği ve ısıtma',
          summary: 'Peteklerin içinde biriken tortu, alt ve üst sıcaklık farklarına neden olur ve ısınma performansını düşürür.',
          details:
            'Düzenli petek temizliği sayesinde kombi daha kısa sürede istenen sıcaklığa ulaşır ve yakıt tüketimi azalır. Özellikle eski tesisatlarda yılda bir temizlik önerilir.',
          tips: [
            'Peteklerin üst kısmı soğuk kalıyorsa hava alma işlemi yapın.',
            'Tesisat suyu kirli görünüyorsa profesyonel kimyasal temizlik isteyin.',
            'Isınma dengesini korumak için termostatik vana kullanın.',
          ],
        },
        {
          title: 'Klimalarda Koku Giderme ve Hijyenik Temizlik',
          category: 'Klima',
          readTime: '4 dk okuma',
          image:
            '/img/2.jpeg',
          imageAlt: 'Klima temizliği ve hijyen',
          summary: 'Klima iç ünitesindeki nem ve toz birikimi zamanla kötü kokuya ve bakteri oluşumuna yol açabilir.',
          details:
            'Anti-bakteriyel temizlik spreyleri ve profesyonel iç ünite bakımı, hem havayı ferahlatır hem de alerjenleri azaltır. Yaz sezonu öncesi hijyenik bakım şarttır.',
          tips: [
            'Kokular arttığında filtreleri yıkayın ve iyice kurutun.',
            'Drenaj hattının tıkalı olmadığından emin olun.',
            'Uzun süre kullanılmayan klimaları çalıştırmadan önce servis çağırın.',
          ],
        },
        {
          title: 'Kombi & Klima Kartı Tamir Süreci: Nelere Dikkat Etmeli?',
          category: 'Kart Tamiri',
          readTime: '5 dk okuma',
          image:
            '/img/3.jpeg',
          imageAlt: 'Kombi ve klima kartı onarımı',
          summary:
            'Kart tamirinde doğru arıza tespiti, kaliteli komponent kullanımı ve test süreci uzun ömürlü onarım için kritiktir.',
          details:
            'Onarım sonrası kart; yük altında test edilir, bağlantı noktaları kontrol edilir ve cihaz üzerinde çalışma doğrulanır. Gerekirse kart revizyonu (kondansatör, röle, sürücü elemanları) uygulanır.',
          tips: [
            'Cihazın marka/model bilgisi ve hata kodunu paylaşın.',
            'Kart üzerinde nem/korozyon varsa mutlaka belirtin.',
            'Onarım sonrası cihazın topraklama ve besleme değerlerini kontrol ettirin.',
          ],
        },
      ],
    },
    hero: {
      badge: '7/24 Kart Tamiri (PCB), Klima & Kombi Servisi',
      title: 'Kart tamiri (PCB), klima ve kombi çözümleriyle eviniz dört mevsim konforlu.',
      subtitle:
        'TayfTeknik, elektronik kart (PCB) tamiri ile klima ve kombi bakım-onarım hizmetlerinde İstanbul genelinde hızlı ve güvenilir servis sunar.',
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
      description: 'Formu doldurun, kart tamiri/klima/kombi ekibimiz 30 dakika içinde sizinle iletişime geçsin.',
      items: [
        { label: 'Hizmet Türü', value: 'Kombi veya Klima Bakımı' },
        { label: 'Ortalama Süre', value: '60 dakika' },
        { label: 'Garanti', value: '12 ay' },
      ],
      cta: 'Formu Doldur',
    },
    services: {
      eyebrow: 'Hizmetler',
      title: 'Kart tamiri (PCB), klima ve kombi hizmetlerinin tamamında yanınızdayız.',
      description:
        'Ev ve işletmeler için elektronik kart (PCB) tamiri, verimli ısıtma ve ferah bir iklimlendirme sağlıyoruz.',
      items: [
        {
          title: 'Elektronik Kart (PCB) Tamiri',
          description: 'Kombi, klima ve cihaz kartlarında arıza tespiti, komponent değişimi ve test süreçleri.',
          image: '/img/6.jpeg',
        },
        {
          title: 'Kombi Bakım & Onarım',
          description: 'Verimli çalışma için detaylı bakım, arıza tespiti ve hızlı müdahale.',
          image: '/img/4.jpeg',
        },
        {
          title: 'Klima Bakım & Onarım',
          description: 'Filtre temizliği, gaz kontrolü ve arıza onarımında hızlı destek.',
          image: '/img/2.jpeg',
        },
        {
          title: 'Kart Arıza Tespiti',
          description: 'Kontrol kartlarında ölçüm, kısa devre analizi ve yerinde/atölye değerlendirme.',
          image: '/img/3.jpeg',
        },
        {
          title: 'Kombi & Klima Montajı',
          description: 'Yetkili montaj, doğru konumlandırma ve garantiye uygun kurulum.',
          image: '/img/1.jpeg',
        },
        {
          title: 'Bakıma Yönlendirme',
          description: 'Periyodik bakım planı, hatırlatma ve takip desteği.',
          image: '/img/5.jpeg',
        },
      ],
    },
    why: {
      eyebrow: 'Neden TayfTeknik?',
      title: 'Güvenlik, hız ve kaliteyi birleştiriyoruz.',
      description: 'Geniş servis ağımız ve deneyimli ekibimizle kart tamiri, klima ve kombi hizmetlerinde sorunsuz deneyim sunuyoruz.',
      highlights: [
        { title: 'Sertifikalı Ustalar', description: 'Yetkili ve eğitimli ekiplerle güvenli uygulama.' },
        { title: 'Hızlı Müdahale', description: 'İstanbul geneline aynı gün servis imkanı.' },
        { title: 'Şeffaf Fiyatlama', description: 'Net keşif sonrası sürpriz masraf yok.' },
        { title: 'Garanti Takibi', description: 'Montaj ve onarımlarda yazılı garanti.' },
      ],
      emergencyTitle: 'Acil servis hattı',
      emergencyDescription:
        'Kaçak şüphesi, kombi ya da klima arızası veya tesisat sorunu yaşadığınızda tek tuşla bize ulaşın.',
      emergencyCta: 'Acil Destek Talebi',
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
          quote: 'Kombi bakımını aynı gün yaptılar, klima temizliğinde de çok titizdiler.',
        },
        {
          name: 'Mert T.',
          role: 'Ümraniye',
          quote: 'Klima bakımı sonrası evdeki hava kalitesini hemen hissettik.',
        },
        {
          name: 'Selin D.',
          role: 'Ataşehir',
          quote: 'Kaçak tespiti ve kombi onarımı çok profesyoneldi. Ekibi gönül rahatlığıyla öneririm.',
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
      title: 'Keşif, bakım veya acil destek.',
      description: 'Kart tamiri (PCB), klima ve kombi için hızlı teklif alın; formu doldurun ya da doğrudan arayın.',
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
      sending: 'Gönderiliyor...',
      success: 'Talebiniz gönderildi. Kısa süre içinde size dönüş yapacağız.',
      error: 'Mesaj gönderilemedi. Lütfen tekrar deneyin.',
    },
    footer: {
      description: 'Kart tamiri (PCB), klima ve kombi servisinde uzman ekip.',
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
    brandSubtitle: 'PCB Repair, AC & Boiler Service',
    navLinks: [
      { label: 'Services', href: '#services' },
      { label: 'References', href: '#references' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '#contact' },
    ],
    blog: {
      navLinks: [
        { label: 'Home', href: '/' },
        { label: 'Contact', href: '/#contact' },
      ],
      eyebrow: 'Blog',
      title: 'PCB repair, AC, and boiler care guide',
      subtitle: 'Practical tips from our technicians for safe use and efficient maintenance.',
      ctaPrimary: 'Request Service',
      ctaSecondary: 'Back to Home',
      posts: [
        {
          title: 'How to Spot a Faulty Control Board (PCB)',
          category: 'PCB Repair',
          readTime: '5 min read',
          image:
            '/img/6.jpeg',
          imageAlt: 'PCB repair and diagnostics',
          summary: 'Control board issues often show up as error codes, random shutdowns, or devices that won’t power on. Early diagnosis helps avoid unnecessary part swaps.',
          details:
            'A proper diagnosis includes visual inspection, short-circuit checks, component testing, and verification under load. This approach improves repair success and reduces turnaround time.',
          tips: [
            'Note any error codes and when the issue occurs.',
            'If you smell burning or see soot marks, power the unit off.',
            'Use surge protection to reduce voltage-related failures.',
          ],
        },
        {
          title: 'AC Maintenance: Clean Filters and Lower Energy Bills',
          category: 'Air Conditioning',
          readTime: '4 min read',
          image:
            '/img/2.jpeg',
          imageAlt: 'Air conditioning unit maintenance',
          summary: 'Clean filters improve air quality and reduce energy consumption. Without maintenance, the system works harder and indoor air feels heavier.',
          details:
            'Regular indoor unit cleaning minimizes odors and allergens while keeping cooling performance steady. Seasonal checks help you enter summer with stronger airflow.',
          tips: [
            'Wash or replace filters monthly during heavy use.',
            'Have refrigerant pressure and drain lines checked before summer.',
            'Keep the outdoor unit unobstructed for proper airflow.',
          ],
        },
        {
          title: 'Boiler Maintenance for Winter Efficiency',
          category: 'Boiler Care',
          readTime: '6 min read',
          image:
            '/img/4.jpeg',
          imageAlt: 'Boiler maintenance service',
          summary: 'Routine maintenance boosts heating performance and extends boiler life. Skipping service often leads to higher fuel usage and increased fault risk.',
          details:
            'Pre-winter checks stabilize heating efficiency and ensure safe combustion. This keeps comfort levels high and protects the system over time.',
          tips: [
            'Bleed radiators and confirm even heating across rooms.',
            'Service the flue, fan, and combustion chamber annually.',
            'Maintain system pressure between 1.2 and 1.5 bar.',
          ],
        },
        {
          title: 'Radiator Cleaning to Balance Heat Distribution',
          category: 'Heating',
          readTime: '5 min read',
          image:
            '/img/4.jpeg',
          imageAlt: 'Radiator cleaning and heating system',
          summary: 'Sediment inside radiators causes uneven temperatures and reduces heating performance across the home.',
          details:
            'Routine radiator flushing helps boilers reach target temperature faster and lowers fuel use. Older systems benefit from yearly professional cleaning.',
          tips: [
            'Bleed air if the top of a radiator stays cool.',
            'Request chemical flushing when system water looks dark.',
            'Use thermostatic valves to keep rooms balanced.',
          ],
        },
        {
          title: 'AC Odor Removal and Hygienic Cleaning',
          category: 'Air Conditioning',
          readTime: '4 min read',
          image:
            '/img/2.jpeg',
          imageAlt: 'Hygienic air conditioner cleaning',
          summary: 'Moisture and dust buildup inside indoor units can cause odors and bacteria growth over time.',
          details:
            'Anti-bacterial cleaning and professional service refresh airflow and reduce allergens. A hygienic tune-up before summer is essential.',
          tips: [
            'Wash filters and let them dry fully when odors increase.',
            'Make sure drain lines are not clogged.',
            'Book service before restarting units after long breaks.',
          ],
        },
        {
          title: 'PCB Repair Process: What to Expect',
          category: 'PCB Repair',
          readTime: '5 min read',
          image:
            '/img/3.jpeg',
          imageAlt: 'Control board repair process',
          summary: 'A durable repair depends on accurate fault finding, quality components, and post-repair testing.',
          details:
            'After repair, the board is tested under load, connectors are verified, and operation is confirmed on the device. When needed, a board revision (capacitors, relays, driver parts) is applied for long-term stability.',
          tips: [
            'Share the device model and any fault codes.',
            'Mention moisture/corrosion if present on the board.',
            'Have grounding and supply values checked after repair.',
          ],
        },
      ],
    },
    hero: {
      badge: '24/7 PCB Repair, AC & Boiler Service',
      title: 'Year-round comfort with PCB repair, air conditioning, and boiler solutions.',
      subtitle:
        'TayfTeknik delivers professional PCB repair plus AC and boiler maintenance across Istanbul with fast, reliable service.',
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
      description: 'Leave your details and our PCB repair, AC, and boiler team will contact you within 30 minutes.',
      items: [
        { label: 'Service Type', value: 'Boiler or AC Maintenance' },
        { label: 'Average Duration', value: '60 minutes' },
        { label: 'Warranty', value: '12 months' },
      ],
      cta: 'Fill Out the Form',
    },
    services: {
      eyebrow: 'Services',
      title: 'We cover PCB repair, AC, and boiler services end to end.',
      description: 'Reliable PCB repair, efficient heating, and comfortable cooling for homes and businesses.',
      items: [
        {
          title: 'PCB Repair',
          description: 'Diagnostics, component replacement, and testing for control boards.',
          image: '/img/6.jpeg',
        },
        {
          title: 'Boiler Maintenance & Repair',
          description: 'Detailed maintenance, fault detection, and rapid on-site repair.',
          image: '/img/4.jpeg',
        },
        {
          title: 'Air Conditioner Maintenance & Repair',
          description: 'Filter cleaning, refrigerant checks, and fast fault repairs.',
          image: '/img/2.jpeg',
        },
        {
          title: 'Control Board Diagnostics',
          description: 'Measurements, short-circuit analysis, and on-site/workshop evaluation.',
          image: '/img/3.jpeg',
        },
        {
          title: 'Boiler & AC Installation',
          description: 'Authorized setup, correct placement, and warranty-compliant installation.',
          image: '/img/1.jpeg',
        },
        {
          title: 'Maintenance Scheduling',
          description: 'Periodic maintenance planning, reminders, and follow-up support.',
          image: '/img/5.jpeg',
        },
      ],
    },
    why: {
      eyebrow: 'Why TayfTeknik?',
      title: 'We combine safety, speed, and quality.',
      description: 'With a wide service network and experienced team, we deliver smooth PCB repair, AC, and boiler service.',
      highlights: [
        { title: 'Certified Technicians', description: 'Authorized, trained teams for safe work.' },
        { title: 'Rapid Response', description: 'Same-day service across Istanbul.' },
        { title: 'Transparent Pricing', description: 'No hidden costs after inspection.' },
        { title: 'Warranty Tracking', description: 'Written warranty on installations and repairs.' },
      ],
      emergencyTitle: 'Emergency hotline',
      emergencyDescription: 'Reach us instantly for leaks, boiler or AC failures, or urgent issues.',
      emergencyCta: 'Request Emergency Support',
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
          quote: 'They handled boiler maintenance the same day and tuned our AC as well.',
        },
        {
          name: 'Mert T.',
          role: 'Ümraniye',
          quote: 'After AC maintenance, the air quality improved immediately.',
        },
        {
          name: 'Selin D.',
          role: 'Ataşehir',
          quote: 'Leak detection and boiler repair were highly professional. I fully recommend them.',
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
      title: 'Inspection, maintenance, or urgent support.',
      description: 'For PCB repair, AC, and boiler service, fill out the form or call us directly.',
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
      sending: 'Sending...',
      success: 'Your request has been sent. We will contact you soon.',
      error: 'Unable to send message. Please try again.',
    },
    footer: {
      description: 'Expert team for PCB repair plus AC and boiler service.',
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
  email: 'alikelebek@tayfteknik.info',
  address: 'Kozyatağı Mah. Enerji Sok. No:12, Kadıköy / İstanbul',
}

const initialContactForm = {
  name: '',
  phone: '',
  service: '',
  message: '',
  company: '',
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<Language>('tr')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [contactForm, setContactForm] = useState(initialContactForm)
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [contactError, setContactError] = useState<string | null>(null)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash
      if (!hash) return

      const id = decodeURIComponent(hash.slice(1))
      if (!id) return

      let attempts = 0
      const tryScroll = () => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }

        attempts += 1
        if (attempts < 25) {
          requestAnimationFrame(tryScroll)
        }
      }

      tryScroll()
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)

    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  const handleContactChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (contactStatus === 'sending') return

    setContactStatus('sending')
    setContactError(null)

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      })
      const data = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string }

      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? 'Unable to send message.')
      }

      setContactStatus('success')
      setContactForm(initialContactForm)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to send message.'
      setContactStatus('error')
      setContactError(message)
    }
  }

  const content = translations[language]
  const isBlogPage = window.location.pathname.startsWith('/blog')
  const navLinks: NavLink[] = content.navLinks.map((link) => {
    if (!isBlogPage) return link
    if (link.href.startsWith('#')) {
      return { ...link, href: `/${link.href}` }
    }
    return link
  })
  const ctaHref = isBlogPage ? '/#contact' : '#contact'
  const logoHref = '/#top'

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div id="top" className="bg-ink-50 text-ink-900 dark:bg-ink-900 dark:text-ink-50">
      <header className="sticky top-0 z-20 border-b border-white/50 bg-gradient-to-r from-white/70 via-sky-50/70 to-cyan-50/70 backdrop-blur transition-shadow duration-300 hover:shadow-soft dark:border-ink-800/70 dark:from-ink-900/80 dark:via-ink-900/60 dark:to-ink-900/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a className="flex items-center" href={logoHref}>
            <Logo />
          </a>
          <nav className="nav-font hidden items-center gap-6 text-xl text-ink-600 md:flex dark:text-ink-300">
            {navLinks.map((link) => (
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
              className="nav-font flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold text-ink-700 shadow-soft transition hover:border-brand-200 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-800/80 dark:text-ink-100"
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
              <span className="text-xs font-semibold">
                {theme === 'dark' ? content.theme.dark : content.theme.light}
              </span>
            </button>
            <div className="nav-font flex items-center gap-1 rounded-full border border-white/70 bg-white/80 p-1 text-xs font-semibold text-ink-700 shadow-soft dark:border-ink-700 dark:bg-ink-800/80 dark:text-ink-100">
                <button
                  type="button"
                  onClick={() => setLanguage('tr')}
                  className={`nav-font rounded-full px-4 py-2 transition ${
                    language === 'tr'
                      ? 'bg-brand-600 text-white shadow-soft'
                      : 'text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white'
                  }`}
                >
                {content.language.tr}
              </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`nav-font rounded-full px-4 py-2 transition ${
                    language === 'en'
                      ? 'bg-brand-600 text-white shadow-soft'
                      : 'text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white'
                  }`}
                >
                {content.language.en}
              </button>
            </div>
            <a
              className="nav-font rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-brand-700"
              href={ctaHref}
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
            className="mobile-menu border-t border-white/60 bg-gradient-to-b from-white/85 via-sky-50/80 to-cyan-50/70 backdrop-blur md:hidden dark:border-ink-800/70 dark:from-ink-900/90 dark:via-ink-900/80 dark:to-ink-900/90"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 text-xl text-ink-800 dark:text-ink-100">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className="nav-font rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-ink-900 shadow-soft transition hover:border-brand-200 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-800/80 dark:text-ink-100 dark:hover:text-white"
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="nav-font flex items-center justify-between rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm font-semibold text-ink-800 shadow-soft transition hover:border-brand-200 dark:border-ink-700 dark:bg-ink-800/80 dark:text-ink-100"
              >
                <span>{content.theme.label}</span>
                <span className="flex items-center gap-2 text-xs font-semibold">
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
                  {theme === 'dark' ? content.theme.dark : content.theme.light}
                </span>
              </button>
              <div className="nav-font flex items-center gap-2 rounded-2xl border border-white/70 bg-white/80 p-2 shadow-soft dark:border-ink-700 dark:bg-ink-800/80">
                <button
                  type="button"
                  onClick={() => setLanguage('tr')}
                  className={`nav-font flex-1 rounded-full px-3 py-2 text-sm font-semibold transition ${
                    language === 'tr'
                      ? 'bg-brand-600 text-white shadow-soft'
                      : 'text-ink-700 dark:text-ink-200'
                  }`}
                >
                  {content.language.tr}
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`nav-font flex-1 rounded-full px-3 py-2 text-sm font-semibold transition ${
                    language === 'en'
                      ? 'bg-brand-600 text-white shadow-soft'
                      : 'text-ink-700 dark:text-ink-200'
                  }`}
                >
                  {content.language.en}
                </button>
              </div>
              <a
                className="rounded-full bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
                href={ctaHref}
                onClick={() => setIsMenuOpen(false)}
              >
                {content.cta.primary}
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {isBlogPage ? (
          <section className="py-16">
            <div className="mx-auto max-w-6xl px-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-700/30 dark:text-brand-200">
                {content.blog.eyebrow}
              </span>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {content.blog.posts.map((post) => (
                  <article key={post.title} className="card flex h-full flex-col overflow-hidden">
                    <div className="-mx-6 -mt-6 mb-5">
                      <img
                        className="h-44 w-full object-cover"
                        src={post.image}
                        alt={post.imageAlt}
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-ink-500 dark:text-ink-400">
                      <span className="rounded-full bg-brand-100 px-3 py-1 text-brand-700 dark:bg-brand-700/30 dark:text-brand-200">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="mt-4 text-lg font-semibold text-ink-900 dark:text-ink-50">{post.title}</h2>
                    <p className="mt-3 text-sm text-ink-600 dark:text-ink-300">{post.summary}</p>
                    {post.details && (
                      <p className="mt-3 text-sm text-ink-600 dark:text-ink-300">{post.details}</p>
                    )}
                    <ul className="mt-4 space-y-2 text-sm text-ink-600 dark:text-ink-300">
                      {post.tips.map((tip) => (
                        <li key={tip} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
                  href="/#contact"
                >
                  {content.blog.ctaPrimary}
                </a>
                <a
                  className="rounded-full border border-ink-200 bg-white/80 px-6 py-3 text-sm font-semibold text-ink-800 shadow-soft transition hover:border-brand-200 hover:text-brand-700 dark:border-ink-600 dark:bg-ink-900/70 dark:text-ink-50"
                  href="/"
                >
                  {content.blog.ctaSecondary}
                </a>
              </div>
            </div>
          </section>
        ) : (
          <>
            <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-ink-50 dark:from-ink-900 dark:via-ink-900 dark:to-ink-800">
          <div className="aurora-bg" aria-hidden="true">
            <div className="aurora-stars aurora-stars-1" />
            <div className="aurora-stars aurora-stars-2" />
            <svg
              className="aurora-svg"
              viewBox="0 0 1200 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="aurora-gradient-1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#4dffe2" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#38d6ff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#2f84ff" stopOpacity="0.65" />
                </linearGradient>
                <linearGradient id="aurora-gradient-2" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4fffc4" stopOpacity="0.9" />
                  <stop offset="55%" stopColor="#3fb6ff" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#7a5cff" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="aurora-gradient-3" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#63f7ff" stopOpacity="0.8" />
                  <stop offset="55%" stopColor="#3ee1ff" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#8a5bff" stopOpacity="0.55" />
                </linearGradient>
                <linearGradient id="aurora-gradient-4" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6dffb8" stopOpacity="0.95" />
                  <stop offset="40%" stopColor="#42e6ff" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#8b64ff" stopOpacity="0.8" />
                </linearGradient>
                <filter id="aurora-blur" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="18" />
                </filter>
                <filter id="aurora-streak-blur" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" />
                </filter>
              </defs>
              <g filter="url(#aurora-blur)">
                <path
                  className="aurora-layer aurora-layer-1"
                  d="M0 170 C 160 90 340 110 520 170 C 700 230 920 220 1200 110 L1200 0 L0 0 Z"
                  fill="url(#aurora-gradient-1)"
                />
                <path
                  className="aurora-layer aurora-layer-2"
                  d="M0 320 C 180 250 400 260 620 320 C 820 380 980 370 1200 300 L1200 140 L0 200 Z"
                  fill="url(#aurora-gradient-2)"
                />
                <path
                  className="aurora-layer aurora-layer-3"
                  d="M0 480 C 200 420 440 430 680 470 C 900 510 1040 500 1200 440 L1200 260 L0 320 Z"
                  fill="url(#aurora-gradient-3)"
                />
              </g>
              <g filter="url(#aurora-streak-blur)">
                <path
                  className="aurora-streak aurora-streak-1"
                  d="M-40 140 C 200 60 420 80 620 140 C 820 200 1040 190 1240 90"
                  stroke="url(#aurora-gradient-4)"
                  strokeWidth="18"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  className="aurora-streak aurora-streak-2"
                  d="M-40 210 C 180 130 420 140 660 200 C 900 260 1060 250 1240 190"
                  stroke="url(#aurora-gradient-4)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  className="aurora-streak aurora-streak-3"
                  d="M-40 280 C 200 210 450 220 700 280 C 950 340 1080 330 1240 270"
                  stroke="url(#aurora-gradient-4)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
            </svg>
          </div>
          <div className="aurora-overlay" aria-hidden="true" />
          <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
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
                  className="rounded-full border border-ink-200 bg-white/80 px-6 py-3 text-sm font-semibold text-ink-800 shadow-soft transition hover:border-brand-200 hover:text-brand-700 dark:border-ink-600 dark:bg-ink-900/70 dark:text-ink-50"
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

        <section id="services" className="scroll-mt-28 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold text-brand-700">{content.services.eyebrow}</p>
            <h2 className="section-title">{content.services.title}</h2>
            <p className="section-lead">{content.services.description}</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {content.services.items.map((service) => (
                <div key={service.title} className="card">
                  <img
                    className="h-28 w-full rounded-2xl object-cover"
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-ink-900 dark:text-ink-50">{service.title}</h3>
                  <p className="mt-3 text-sm text-ink-600 dark:text-ink-300">{service.description}</p>
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

        <section id="references" className="scroll-mt-28 bg-white py-16 dark:bg-ink-900">
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

        <section
          id="contact"
          className="scroll-mt-28 relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-ink-50 py-16 text-ink-900 dark:from-ink-900 dark:via-ink-900 dark:to-ink-800 dark:text-ink-50"
        >
          <div className="aurora-bg" aria-hidden="true">
            <div className="aurora-stars aurora-stars-1" />
            <div className="aurora-stars aurora-stars-2" />
            <svg
              className="aurora-svg"
              viewBox="0 0 1200 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="contact-aurora-gradient-1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#4dffe2" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#38d6ff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#2f84ff" stopOpacity="0.65" />
                </linearGradient>
                <linearGradient id="contact-aurora-gradient-2" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4fffc4" stopOpacity="0.9" />
                  <stop offset="55%" stopColor="#3fb6ff" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#7a5cff" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="contact-aurora-gradient-3" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#63f7ff" stopOpacity="0.8" />
                  <stop offset="55%" stopColor="#3ee1ff" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#8a5bff" stopOpacity="0.55" />
                </linearGradient>
                <linearGradient id="contact-aurora-gradient-4" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6dffb8" stopOpacity="0.95" />
                  <stop offset="40%" stopColor="#42e6ff" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#8b64ff" stopOpacity="0.8" />
                </linearGradient>
                <filter id="contact-aurora-blur" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="18" />
                </filter>
                <filter id="contact-aurora-streak-blur" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" />
                </filter>
              </defs>
              <g filter="url(#contact-aurora-blur)">
                <path
                  className="aurora-layer aurora-layer-1"
                  d="M0 170 C 160 90 340 110 520 170 C 700 230 920 220 1200 110 L1200 0 L0 0 Z"
                  fill="url(#contact-aurora-gradient-1)"
                />
                <path
                  className="aurora-layer aurora-layer-2"
                  d="M0 320 C 180 250 400 260 620 320 C 820 380 980 370 1200 300 L1200 140 L0 200 Z"
                  fill="url(#contact-aurora-gradient-2)"
                />
                <path
                  className="aurora-layer aurora-layer-3"
                  d="M0 480 C 200 420 440 430 680 470 C 900 510 1040 500 1200 440 L1200 260 L0 320 Z"
                  fill="url(#contact-aurora-gradient-3)"
                />
              </g>
              <g filter="url(#contact-aurora-streak-blur)">
                <path
                  className="aurora-streak aurora-streak-1"
                  d="M-40 140 C 200 60 420 80 620 140 C 820 200 1040 190 1240 90"
                  stroke="url(#contact-aurora-gradient-4)"
                  strokeWidth="18"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  className="aurora-streak aurora-streak-2"
                  d="M-40 210 C 180 130 420 140 660 200 C 900 260 1060 250 1240 190"
                  stroke="url(#contact-aurora-gradient-4)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  className="aurora-streak aurora-streak-3"
                  d="M-40 280 C 200 210 450 220 700 280 C 950 340 1080 330 1240 270"
                  stroke="url(#contact-aurora-gradient-4)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
            </svg>
          </div>
          <div className="aurora-overlay" aria-hidden="true" />
          <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold text-brand-700 dark:text-brand-200">{content.contact.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold text-ink-900 sm:text-4xl dark:text-ink-50">
                {content.contact.title}
              </h2>
              <p className="mt-4 text-sm text-ink-600 dark:text-ink-300">{content.contact.description}</p>
              <div className="mt-8 space-y-4 text-sm">
                <div>
                  <p className="text-xs font-semibold text-brand-700 dark:text-brand-200">{content.contact.phoneLabel}</p>
                  <p className="text-lg font-semibold text-ink-900 dark:text-ink-50">{contactInfo.phone}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-700 dark:text-brand-200">{content.contact.emailLabel}</p>
                  <p className="text-base text-ink-700 dark:text-ink-200">{contactInfo.email}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-700 dark:text-brand-200">{content.contact.addressLabel}</p>
                  <p className="text-base text-ink-700 dark:text-ink-200">{contactInfo.address}</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 text-ink-900 shadow-soft dark:bg-ink-800 dark:text-ink-50">
              <h3 className="text-lg font-semibold">{content.contact.formTitle}</h3>
              <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{content.contact.formDescription}</p>
              <form className="mt-6 grid gap-4" onSubmit={handleContactSubmit}>
                <input
                  className="hidden"
                  name="company"
                  value={contactForm.company}
                  onChange={handleContactChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <input
                  className="rounded-2xl border border-ink-200 px-4 py-3 text-sm dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100"
                  placeholder={content.contact.fields.name}
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  required
                />
                <input
                  className="rounded-2xl border border-ink-200 px-4 py-3 text-sm dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100"
                  placeholder={content.contact.fields.phone}
                  type="tel"
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleContactChange}
                  required
                />
                <input
                  className="rounded-2xl border border-ink-200 px-4 py-3 text-sm dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100"
                  placeholder={content.contact.fields.service}
                  type="text"
                  name="service"
                  value={contactForm.service}
                  onChange={handleContactChange}
                  required
                />
                <textarea
                  className="min-h-[120px] rounded-2xl border border-ink-200 px-4 py-3 text-sm dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100"
                  placeholder={content.contact.fields.message}
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  required
                />
                <button
                  className="rounded-2xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
                  type="submit"
                  disabled={contactStatus === 'sending'}
                >
                  {contactStatus === 'sending' ? content.contact.sending : content.contact.submit}
                </button>
                {contactStatus === 'success' && (
                  <p className="text-sm font-medium text-emerald-600">{content.contact.success}</p>
                )}
                {contactStatus === 'error' && (
                  <p className="text-sm font-medium text-rose-600">{contactError ?? content.contact.error}</p>
                )}
              </form>
            </div>
          </div>
        </section>
          </>
        )}
      </main>

      <footer className="nav-font border-t border-ink-100 bg-white dark:border-ink-800 dark:bg-ink-900">
        <div className="mx-auto flex flex-col items-start justify-between gap-6 px-6 py-8 text-sm text-ink-600 md:flex-row md:items-center dark:text-ink-300">
          <div>
            <p className="font-semibold text-ink-900 dark:text-ink-50">TayfTeknik</p>
            <p>{content.footer.description}</p>
            <p className="mt-2 text-xs text-ink-500 dark:text-ink-400">{content.footer.credit}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {navLinks.map((link) => (
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
