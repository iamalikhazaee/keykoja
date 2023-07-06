import Image from 'next/image'
import AccountBox from './login'
import Header from '@/components/landingPage/Header'
import Footer from '@/components/landingPage/Footer'
import Hero from '@/components/landingPage/Hero'
import Features from '@/components/landingPage/Features'
import Zigzag from '@/components/landingPage/Zigzag'
import Testimonials from '@/components/landingPage/Testiominals'


export default function Home() {
  return (
    <main className='grow bg-[#fff]'>
      <Header />
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Footer />
      {/* <AccountBox /> */}
    </main>
  )
}
