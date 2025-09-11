import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Centered Button App',
  description: 'A simple Next.js app with a centered button',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
