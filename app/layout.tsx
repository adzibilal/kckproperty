import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FacebookPixel from './_components/FacebookPixel'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Karya Cipta Property',
    description: 'Ciptakan masa depanmu bersama Karya Cipta Property'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                {children}
                <FacebookPixel />
                <Analytics />
            </body>
        </html>
    )
}
