import { Hero } from '@/src/components/Hero'
import { Navbar } from '../src/components/Navbar'
import { Premiere } from '@/src/components/Premiere'
import { PlayInfo } from '@/src/components/PlayInfo'
import { WhereWhen } from '@/src/components/WhereWhen'
import { Footer } from '@/src/components/Footer'
import { JoinNewsletter } from '@/src/components/JoinNewsletter'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-1 pb-4 gap-3">
        <Navbar />
        <Hero />
        <Premiere />
        <PlayInfo />
        <WhereWhen />
        <JoinNewsletter />

        <div className='h-20' />

        <Footer />
    </main>
  )
}
