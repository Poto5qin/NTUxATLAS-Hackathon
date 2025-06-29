import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NTU Learning Analytics Hackathon',
  description: 'Made by DevHub@iLab',
  generator: 'DevHub@iLab',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
