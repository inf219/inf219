import type { Metadata } from 'next'
import LinkButton from './components/linkButton'
import './globals.css'

export const metadata: Metadata = {
  title: 'Teaching Agents',
  description: 'A Next.js app with a shared layout',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="p-4 bg-blue-600 text-white">
            <nav className="mt-2">
            <LinkButton href="/home/student">Student</LinkButton>
            <LinkButton href="/home/teacher">Teacher</LinkButton>
            </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
