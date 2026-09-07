import { Navbar } from "@/components/sites/ng-cash-55f1739f/root-8a5edab2/Navbar";
import { HeroSection } from "@/components/sites/ng-cash-55f1739f/root-8a5edab2/HeroSection";
import { VideoSection } from "@/components/sites/ng-cash-55f1739f/root-8a5edab2/VideoSection";
import { AboutSection } from "@/components/sites/ng-cash-55f1739f/root-8a5edab2/AboutSection";
import { SkinSection } from "@/components/sites/ng-cash-55f1739f/root-8a5edab2/SkinSection";
import { AppIntroSection } from "@/components/sites/ng-cash-55f1739f/root-8a5edab2/AppIntroSection";
import { AllAgesSection } from "@/components/sites/ng-cash-55f1739f/root-8a5edab2/AllAgesSection";
import { PixSection } from "@/components/sites/ng-cash-55f1739f/root-8a5edab2/PixSection";
import { NgCardSection } from "@/components/sites/ng-cash-55f1739f/root-8a5edab2/NgCardSection";
import { FeatureSection } from "@/components/sites/ng-cash-55f1739f/root-8a5edab2/FeatureSection";
import { FooterSection } from "@/components/sites/ng-cash-55f1739f/root-8a5edab2/FooterSection";
import { DownloadFloatingButton } from "@/components/sites/ng-cash-55f1739f/shared/DownloadFloatingButton";

// Clone of https://www.ng.cash/ — research artifacts in
// docs/research/ng-cash-55f1739f/root-8a5edab2/ and
// docs/design-references/ng-cash-55f1739f/root-8a5edab2/
export default function Home() {
  return (
    <div className="relative h-screen w-full bg-black">
      <DownloadFloatingButton />
      <Navbar />
      <main className="ngcash-scroll-wrap h-screen w-screen overflow-y-scroll">
        <HeroSection />
        <VideoSection />
        <AboutSection />
        <SkinSection />
        <AppIntroSection />
        <AllAgesSection />
        <PixSection />
        <NgCardSection />
        <FeatureSection />
        <FooterSection />
      </main>
    </div>
  );
}
