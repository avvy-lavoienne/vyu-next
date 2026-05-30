/**
 * Structured Data Utilities for SEO
 * Generates JSON-LD structured data for search engines
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vyuapp.com'

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VyuApp',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: 'Innovative technology solutions for modern businesses',
  foundingDate: '2020',
  sameAs: [
    'https://twitter.com/VyuApp',
    'https://linkedin.com/company/vyuapp',
    'https://github.com/VyuApp',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'vyuapp@proton.me',
    telephone: '+62-819-3298-9898',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Ratu Indah Dewata, Perum Griya Mutiara Rancabango Blok C.40',
    addressLocality: 'Tarogong Kaler',
    addressRegion: 'Jawa Barat',
    postalCode: '44151',
    addressCountry: 'ID',
  },
})

export const generateWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: siteUrl,
  name: 'VyuApp',
  description: 'Professional web development, mobile apps, and digital solutions',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
})

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const generateServiceSchema = (service: {
  name: string
  description: string
  provider: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'Organization',
    name: service.provider,
    url: siteUrl,
  },
  areaServed: 'ID',
  availableLanguage: 'en',
})

export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'VyuApp',
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  description: 'Professional web development and mobile app development company',
  telephone: '+62-819-3298-9898',
  email: 'vyuapp@proton.me',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Ratu Indah Dewata, Perum Griya Mutiara Rancabango Blok C.40',
    addressLocality: 'Tarogong Kaler',
    addressRegion: 'Jawa Barat',
    postalCode: '44151',
    addressCountry: 'ID',
  },
  sameAs: [
    'https://twitter.com/VyuApp',
    'https://linkedin.com/company/vyuapp',
    'https://github.com/VyuApp',
  ],
})
