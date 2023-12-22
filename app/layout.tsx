import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/providers/modal-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Admin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}
      <ModalProvider />
      </body>
    </html>
    </ClerkProvider>

  )
}
