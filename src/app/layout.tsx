import type { Metadata } from 'next'
import LinkButton from './components/buttons/linkButton'
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
      <body className="bg-gray-100 text-gray-900 ">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#3B82F6] rounded-full opacity-30"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-[#3B82F6] rounded-full opacity-20"></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-40"></div>
          <div className="absolute top-60 right-1/3 w-1 h-1 bg-white rounded-full opacity-50"></div>
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#3B82F6] rounded-full opacity-25"></div>
          <div className="absolute bottom-10 left-20 w-2 h-2 bg-cyan-300 rounded-full opacity-35"></div>
          <div className="absolute bottom-190 left-20 w-2 h-2 bg-cyan-300 rounded-full opacity-35"></div>
        </div>
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
