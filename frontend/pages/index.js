import Image from 'next/image'
import AccountBox from './login'
import Header from '@/components/landingPage/Header'
import Footer from 'react-multi-date-picker/plugins/range_picker_footer'
import Hero from '@/components/landingPage/Hero'
import Features from '@/components/landingPage/Features'
import Zigzag from '@/components/landingPage/Zigzag'
import Testimonials from '@/components/landingPage/Testiominals'


export default function Home() {
  return (
    <main className='grow bg-[#d8f3dc]'>
      <Header />
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      {/* <Footer /> */}
      {/* <AccountBox /> */}
    </main>
  )
}
