import { MysticBackground } from '@/components/MysticBackground';
import { StickyCTA } from '@/components/StickyCTA';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { BlockingSection } from '@/components/sections/BlockingSection';
import { YesodSection } from '@/components/sections/YesodSection';
import { ConsequenceSection } from '@/components/sections/ConsequenceSection';
import { WhyNowSection } from '@/components/sections/WhyNowSection';
import { WhatIsSection } from '@/components/sections/WhatIsSection';
import { JourneySection } from '@/components/sections/JourneySection';
import { CreatorSection } from '@/components/sections/CreatorSection';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { OfferSection } from '@/components/sections/OfferSection';
import { GuaranteeSection } from '@/components/sections/GuaranteeSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <MysticBackground />
      
      <main className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <BlockingSection />
        <YesodSection />
        <ConsequenceSection />
        <WhyNowSection />
        <WhatIsSection />
        <JourneySection />
        <CreatorSection />
        <ResultsSection />
        <OfferSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <StickyCTA />
    </div>
  );
};

export default Index;
