import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Clock from './components/Clock'
import { SkeletonTheme } from 'react-loading-skeleton';
import Locata from './components/locata';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather APP',
  description: 'Weather App by peerapat',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        
        <div className='w-full h-screen grid lg:grid-cols-[minmax(800px,100%)_minmax(350px,450px)] grid-cols-1 '>
          <div className='bg-indigo-50 h-full dark:bg-[#121212] order-last lg:order-first'>
            <Clock/>
            {children}
          </div>
          
          <div className='bg-white h-full dark:bg-[#1E1E1E]'>
            <Locata/>
          </div>
        </div>
        </SkeletonTheme>
      </body>
    </html>
  )
}
