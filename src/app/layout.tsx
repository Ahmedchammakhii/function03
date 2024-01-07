import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import "./globals.css"

const inter = Poppins({ weight:["200","300","700","500"],subsets:["latin"] })

export const metadata: Metadata = {
  title: 'Etherum wallet',
  description: 'technical test for fuction03 Labs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
