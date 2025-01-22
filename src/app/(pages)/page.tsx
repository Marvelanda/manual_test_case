import { MainSection } from '@/components/MainSection/MainSection';
import FooterSection from '@/components/FooterSection/FooterSection';
import HelpSection from '@/components/HelpSection/HelpSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <MainSection />

      <HelpSection />

      <FooterSection />
    </div>
  );
}
