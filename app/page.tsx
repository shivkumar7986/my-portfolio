import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import SkillsSection from "@/components/home/SkillsSection";
import ContactCTA from "@/components/home/ContactCTA";
import Aurora from "@/components/ui/Aurora";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <Aurora
          colorStops={["#EB362B", "#EB362B", "#EB362B"]}
          blend={0.6}
          amplitude={1.0}
          speed={0.9}
        /> 
      </div>

      <HeroSection />

      <div className="bg-black relative z-10 w-full">   
        <AboutSection />
        <ProjectsPreview />
        <SkillsSection />
        <ContactCTA />
      </div>
    </>
  );
}
