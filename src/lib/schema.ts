import { siteConfig } from '@/config/site';
import type { Trek } from '@/data/treks';
import type { Tour } from '@/data/tours';

const isValidUrl = (value?: string) => Boolean(value && value.startsWith('http'));

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    areaServed: siteConfig.location.serviceAreas,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.baseTown,
      streetAddress: siteConfig.location.address
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.googleBusinessProfile].filter(isValidUrl)
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.baseTown,
      streetAddress: siteConfig.location.address
    },
    areaServed: siteConfig.location.serviceAreas,
    openingHours: siteConfig.contact.businessHours
  };
}

export function serviceSchema(item: Trek | Tour) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: item.name,
    provider: {
      '@type': 'TravelAgency',
      name: siteConfig.name
    },
    areaServed: siteConfig.location.serviceAreas,
    serviceType: 'Guided Trekking, Camping, and Tours',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: item.priceFrom,
      availability: 'https://schema.org/PreOrder',
      url: siteConfig.baseUrl
    }
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function reviewSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5'
    },
    author: {
      '@type': 'Person',
      name: 'Guest A'
    },
    reviewBody: 'Placeholder review for display purposes. Replace with real guest feedback.'
  };
}
