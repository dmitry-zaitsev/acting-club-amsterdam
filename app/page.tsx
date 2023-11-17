import { Hero } from '@/src/components/Hero';
import { Navbar } from '../src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { JoinNewsletter } from '@/src/components/JoinNewsletter';
import { HeroPhoto } from '@/src/components/HeroPhoto';
import { UpcomingProductions } from '@/src/components/UpcomingProductions';
import { CourseBanner } from '@/src/components/CourseBanner';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-1 pb-4 gap-3">
      <Navbar />
      <Hero />
      <UpcomingProductions />
      <CourseBanner />
      <HeroPhoto />
      <JoinNewsletter />

      <div className="h-20" />

      <Footer />
    </main>
  );
}
