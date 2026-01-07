const isPlaceholder = (value?: string) => !value || value.includes('{{');
const envDomain = process.env.NEXT_PUBLIC_DOMAIN;

export const siteConfig = {
  name: 'Walk in Himalayas',
  tagline: 'Guided treks & authentic Himalayan adventures',
  description:
    'Local BMC-certified Himalayan guide-led treks, camping, and tours across Chamba Valley, Dalhousie, Dharamshala, and Manali. Safety-first, family-friendly, and offbeat village experiences.',
  domain: !isPlaceholder(envDomain) ? envDomain : '{{DOMAIN}}',
  baseUrl: !isPlaceholder(envDomain) ? `https://${envDomain}` : 'http://localhost:3000',
  founder: {
    name: 'Ankit',
    certification: 'BMC (Basic Mountaineering Course)',
    institute: '{{BMC_INSTITUTE}}',
    year: '{{BMC_YEAR}}'
  },
  location: {
    baseTown: 'Dalhousie, Himachal Pradesh',
    address: process.env.NEXT_PUBLIC_ADDRESS || '{{ADDRESS}}',
    serviceAreas: ['Chamba Valley', 'Dalhousie', 'Dharamshala', 'Manali', 'Kullu', 'Parvati'],
    secondary: 'Anywhere in Himachal / Pan-Himalayan on request'
  },
  contact: {
    phone: '7807237233',
    whatsapp: '7807237233',
    email: process.env.NEXT_PUBLIC_EMAIL || 'walkinhimalyas@gmil.com',
    businessHours: process.env.NEXT_PUBLIC_BUSINESS_HOURS || '{{BUSINESS_HOURS}}'
  },
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '{{INSTAGRAM_URL}}',
    googleBusinessProfile: process.env.NEXT_PUBLIC_GBP_URL || '{{GBP_URL}}'
  },
  cta: {
    primary: 'WhatsApp to Book',
    secondary: 'Enquire Now',
    call: 'Call Now'
  },
  data: {
    treksPath: 'src/data/treks.ts',
    toursPath: 'src/data/tours.ts',
    regionsPath: 'src/data/regions.ts'
  }
};

export type SiteConfig = typeof siteConfig;
