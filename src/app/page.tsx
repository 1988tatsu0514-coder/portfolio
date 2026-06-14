import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import ProfileGrid from "@/components/ProfileGrid";
import FeatureImage from "@/components/FeatureImage";
import SelectedWorks from "@/components/SelectedWorks";
import Workflow from "@/components/Workflow";
import PastClients from "@/components/PastClients";
import AboutContact from "@/components/AboutContact";

export default function Home() {
  return (
    <main className="bg-black">
      <Navigation />
      <Hero />
      <Statement />
      <ProfileGrid />
      <FeatureImage />
      <SelectedWorks />
      <Workflow />
      <PastClients />
      <AboutContact />
    </main>
  );
}
