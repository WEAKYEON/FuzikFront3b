// Shared website copy. Keep page-specific content in its page or a slot.
export type WebsiteLocale = 'en' | 'th'
export interface FooterLink {
  label: string
  href: string
  target?: string
}
export interface FooterColumn {
  title: string
  links: FooterLink[]
}
export const websiteContent = {
  en: {
    banner: {
      title: 'Ready to Start Your ',
      highlight: 'Global Jam?',
      description:
        'Join thousands of hobbyist musicians already connecting, playing, and creating on Fuzik Collaborate. Your next musical adventure is just a click away!',
      button: 'Launch Fuzik App Now!',
    },
    footer: {
      description:
        'Empowering musicians worldwide to connect, create, and jam together through innovative video synchronization technology.',
      columns: [
        {
          title: 'The Platform',
          links: [
            {
              label: 'Features',
              href: '/feature',
            },
            {
              label: 'Pricing',
              href: '/pricing',
            },
            {
              label: 'Web App',
              href: '/webapp',
              target: '_blank',
            },
          ],
        },
        {
          title: 'Resources',
          links: [
            {
              label: 'Contact Us',
              href: '/contact',
            },
            {
              label: 'FAQ',
              href: '/faq',
            },
            {
              label: 'Blog',
              href: '/blog',
            },
          ],
        },
        {
          title: 'Legal',
          links: [
            {
              label: 'Privacy Policy',
              href: '/privacy_policy',
            },
            {
              label: 'Terms of Service',
              href: '/terms',
            },
            {
              label: 'Cookie Policy',
              href: '/cookie',
            },
          ],
        },
      ],
      copyright:
        '© 2024 Fuzik Collaborate by Fuzik Connex Co., Ltd. All rights reserved.',
      tagline: 'Connect. Play. Collaborate. Jam.',
    },
    cookies: {
      title: 'We Value Your Privacy',
      intro: 'This website (',
      site: 'www.fuzik.co',
      description:
        ') uses cookies to enhance your experience and analyze site traffic. By clicking "Accept All Cookies", you consent to the use of all cookies. For more information or to manage your preferences, click "Manage Preferences".',
      accept: 'Accept All Cookies',
      manage: 'Manage Preferences',
      preferencesTitle: 'Manage Your Cookie Preferences',
      essentialLabel: 'Essential Cookies',
      essentialDescription:
        'These cookies are necessary for the website to function and cannot be switched off.',
      analyticsLabel: 'Analytics Cookies',
      analyticsDescription:
        'These cookies help us understand how visitors interact with our website, enabling us to improve its performance.',
      marketingLabel: 'Marketing Cookies',
      marketingDescription:
        'These cookies are used to track visitors across websites to display relevant advertisements.',
      save: 'Save Preferences',
    },
  },
  th: {
    banner: {
      title: 'พร้อมที่จะเริ่ม',
      highlight: 'การแจมระดับโลกของคุณแล้วหรือยัง?',
      description:
        'เข้าร่วมกับนักดนตรีมือสมัครเล่นหลายพันคนทั่วโลกที่กำลังเชื่อมต่อ เล่น และสร้างสรรค์บน Fuzik Collaborate การผจญภัยทางดนตรีครั้งต่อไปของคุณเพียงแค่คลิกเดียว!',
      button: 'เปิดแอป Fuzik เลย!',
    },
    footer: {
      description:
        'เสริมสร้างศักยภาพนักดนตรีทั่วโลกให้เชื่อมต่อ สร้างสรรค์ และแจมดนตรีร่วมกันผ่านเทคโนโลยีการซิงโครไนซ์วิดีโอที่เป็นนวัตกรรม',
      columns: [
        {
          title: 'แพลตฟอร์ม',
          links: [
            {
              label: 'ฟีเจอร์',
              href: '/feature-th',
            },
            {
              label: 'ราคา',
              href: '/pricing-th',
            },
            {
              label: 'เว็บแอป',
              href: 'https://fuzikapp.com/webpapp',
              target: '_blank',
            },
          ],
        },
        {
          title: 'แหล่งข้อมูล',
          links: [
            {
              label: 'ติดต่อเรา',
              href: '/contact-th',
            },
            {
              label: 'คำถามที่พบบ่อย',
              href: '/faq-th',
            },
            {
              label: 'บล็อก',
              href: '/blog/index-th',
            },
          ],
        },
        {
          title: 'กฎหมาย',
          links: [
            {
              label: 'นโยบายความเป็นส่วนตัว',
              href: '/privacy_policy-th',
            },
            {
              label: 'ข้อกำหนดในการให้บริการ',
              href: '/terms-th',
            },
            {
              label: 'นโยบายคุกกี้',
              href: '/cookie-th',
            },
          ],
        },
      ],
      copyright:
        '© 2024 Fuzik Collaborate โดย Fuzik Connex Co., Ltd. สงวนลิขสิทธิ์',
      tagline: 'เล่นดนตรีด้วยกัน',
    },
    cookies: {
      title: 'เราให้ความสำคัญกับความเป็นส่วนตัวของคุณ',
      intro: 'เว็บไซต์นี้ (',
      site: 'www.fuzik.co',
      description:
        ') ใช้คุกกี้เพื่อปรับปรุงประสบการณ์ของคุณและวิเคราะห์ปริมาณการเข้าชมเว็บไซต์ การคลิก "ยอมรับคุกกี้ทั้งหมด" แสดงว่าคุณยินยอมให้ใช้คุกกี้ทั้งหมด สำหรับข้อมูลเพิ่มเติมหรือจัดการการตั้งค่าของคุณ โปรดคลิก "จัดการการตั้งค่า".',
      accept: 'ยอมรับคุกกี้ทั้งหมด',
      manage: 'จัดการการตั้งค่า',
      preferencesTitle: 'จัดการการตั้งค่าคุกกี้ของคุณ',
      essentialLabel: 'คุกกี้ที่จำเป็น',
      essentialDescription:
        'คุกกี้เหล่านี้จำเป็นสำหรับการทำงานของเว็บไซต์และไม่สามารถปิดได้',
      save: 'บันทึกการตั้งค่า',
    },
  },
} as const
