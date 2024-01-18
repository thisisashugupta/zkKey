import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Connectkit from './Connectkit'
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'zkKey',
  description: 'transasctions made using pattern',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Connectkit>
          <Navbar/>
          {children}
        </Connectkit>
      </body>
    </html>
  )
}
