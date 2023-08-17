import './globals.css'
import { ReactNode } from 'react'
import {
  Roboto_Flex as roboto,
  Bai_Jamjuree as baiJamjuree,
} from 'next/font/google'

import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'

const robotoFlex = roboto({ subsets: ['latin'], variable: '--font-roboto' })
const BaiJamjuree = baiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--baiJuanjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'A Time Capsule made with React, Next.JS, Tailwind and TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticaded = cookies().has('token')

  return (
    <html lang="en">
      <body
        className={`${robotoFlex.variable} ${BaiJamjuree.variable}font-sans bg-gray-900 text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          {/* Left column */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            {/* Blur */}
            <div className="opacity-58 absolute right-0 top-1/2 h-[280px] w-[526px] -translate-y-1/2  translate-x-1/2 rounded-full bg-purple-700 blur-full" />
            {/* Stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
            {isAuthenticaded ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
          </div>
          {/* Right column */}
          <div className="flex max-h-screen flex-col overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
