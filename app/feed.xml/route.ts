import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || ''

export async function GET(): Promise<Response> {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>VyuApp - Innovative Technology Solutions</title>
    <link>${baseUrl}</link>
    <description>Professional web development, mobile apps, and digital solutions for modern businesses</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <category>Technology</category>
    <category>Web Development</category>
    <category>Mobile Apps</category>
    
    <item>
      <title>Expert Web Development Solutions</title>
      <link>${baseUrl}#portfolio</link>
      <guid>${baseUrl}#portfolio</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <description>Discover our cutting-edge web development services powered by Next.js, React, and modern technologies</description>
      <category>Web Development</category>
      <category>Portfolio</category>
    </item>
    
    <item>
      <title>Mobile App Development Services</title>
      <link>${baseUrl}#features</link>
      <guid>${baseUrl}#features</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <description>We deliver responsive, high-performance mobile applications with fintech-grade design and scalable architecture</description>
      <category>Mobile Apps</category>
      <category>Development</category>
    </item>
    
    <item>
      <title>Digital Transformation & Consulting</title>
      <link>${baseUrl}#contact</link>
      <guid>${baseUrl}#contact</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <description>Transform your business with our innovative technology solutions and expert consulting services</description>
      <category>Consulting</category>
      <category>Digital Transformation</category>
    </item>
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
