import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kurniawan Abdi | Portfolio Assistant',
  description: 'Software Engineer portfolio with a free ask-about-me assistant.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
