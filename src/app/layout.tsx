import type { Metadata } from 'next'
import LinkButton from './components/buttons/linkButton'

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
      <body className="bg-gray-100 text-gray-900 ">
        <header className="p-4 bg-blue-600">
            <nav className="mt-2 space-x-4">
            <LinkButton href="/home/student">Student</LinkButton>
            <LinkButton href="/home/teacher">Teacher</LinkButton>
            </nav>
        </header>
        <main className='w-full'>{children}</main>
      </body>
    </html>
  )
}
