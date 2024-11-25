import type { Metadata } from 'next'
import { Raleway, Roboto_Slab } from 'next/font/google'
import './globals.css'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
})

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto-slab',
})

export const metadata: Metadata = {
  title: 'Mandy Hale | Portfolio',
  description: 'Full stack web developer', //TODO expand for SEO , value, services
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${robotoSlab.variable}`}>
      <body>{children}</body>
    </html>
  )
}
