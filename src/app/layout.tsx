import type { Metadata } from 'next'
import './globals.css'
import Providers from './Providers'
import Footer from '@/components/server/Footer'
import Header from '@/components/server/Header'
import { Quicksand } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Ganga Koshi Agriculture',
  description: 'Transform your farming journey with our comprehensive agricultural solutions. From in-depth farm analysis to seamless crop sales, our expert team offers guidance and materials such as soil testing and fencing. Join us for a holistic approach to enhance your production and elevate your agricultural success.',
}

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ["300", '400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={quicksand.className}>
        <Providers>
          <Header />
          <main>
            <div className="min-h-[calc(100dvh-76.8px)] flex flex-col max-w-6xl p-2 mx-auto">
              {children}
            </div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
