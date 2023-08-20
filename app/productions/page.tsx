import { Navbar } from '@/src/components/Navbar';
import { ProductionsList } from '@/src/components/ProductionsList';

export default function Productions() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-1 pb-4 gap-3">
      <Navbar showLogo={true} />

      <ProductionsList />
    </main>
  );
}
