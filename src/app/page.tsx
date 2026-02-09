import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import HeroSection from "@/components/sections/HeroSection";
import WhatIsSection from "@/components/sections/WhatIsSection";
import WhyNeedSection from "@/components/sections/WhyNeedSection";
import CoreFeaturesSection from "@/components/sections/CoreFeaturesSection";
import AdvancedFeaturesSection from "@/components/sections/AdvancedFeaturesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TechStackSection from "@/components/sections/TechStackSection";
import WhiteLabelVsCustomSection from "@/components/sections/WhiteLabelVsCustomSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ComparisonTableSection from "@/components/sections/ComparisonTableSection";
import FAQSection from "@/components/sections/FAQSection";
import DemoFormSection from "@/components/sections/DemoFormSection";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main className="pt-[72px]">
        <HeroSection />
        <WhatIsSection />
        <WhyNeedSection />
        <CoreFeaturesSection />
        <AdvancedFeaturesSection />
        <ProcessSection />
        <TechStackSection />
        <WhiteLabelVsCustomSection />
        <WhyChooseSection />
        <ComparisonTableSection />
        <FAQSection />
        <DemoFormSection />
      </main>
      <Footer />
    </>
  );
}
