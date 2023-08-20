import { Footer } from '@/src/components/Footer';
import { Navbar } from '@/src/components/Navbar';
import { TicketsDateSelector } from '@/src/components/TicketsDateSelector';

export default function Tickets() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-1 pb-4 gap-3">
      <Navbar showLogo={true} />

      <TicketsDateSelector />

      <div className="h-20" />

      <Footer />
    </main>
  );
}
