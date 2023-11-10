import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from './providers/ThemeProvider';
import Navbar from '@/components/Navbar/Navbar';

const manrope = localFont({
  src: [
    {
      path: '../assets/fonts/manrope/Manrope-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/manrope/Manrope-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/manrope/Manrope-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../assets/fonts/manrope/Manrope-ExtraBold.ttf',
      weight: '900',
      style: 'normal'
    }
  ],
  variable: '--font-manrope'
})

export const metadata: Metadata = {
  title: 'Afzal Khan - Full Stack Software Engineer',
  description: "I'm a passionate and creative full-stack software engineer from India 🇮🇳. Visit my website to learn more about me and my projects",
  keywords: [

  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}`}>
        <ThemeProvider defaultTheme='system' attribute='class' disableTransitionOnChange enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
