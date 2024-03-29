import { Courses } from '@/src/components/Courses';
import { Footer } from '@/src/components/Footer';
import { Navbar } from '@/src/components/Navbar';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-1 pb-4 gap-3">
      <Navbar showLogo={true} />

      <Courses />

      <div className="h-20" />

      <Footer />
    </main>
  );
}
