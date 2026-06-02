import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import ProjectsPreview from '@/components/home/ProjectsPreview'
import SkillsSection from '@/components/home/SkillsSection'
import ContactCTA from '@/components/home/ContactCTA'
import LightPillar from '@/components/ui/LightPillar'
import EvilEye from '@/components/ui/EvilEye'


export default function Home() {
  return (
    <>
      {/* Fixed Background LightPillar */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* <LightPillar
          topColor="#000000"
          bottomColor="#9f40b5"
          intensity={0.9}
          rotationSpeed={0.1}
          glowAmount={0.002}
          pillarWidth={8.4}
          pillarHeight={0.2}
          noiseIntensity={0.5}
          pillarRotation={110}
          interactive
          mixBlendMode="normal"
          quality="high"
        /> */}

        

<EvilEye
  eyeColor="#dc072c"
  intensity={1.7}
  pupilSize={0.45}
  irisWidth={0.4}
  glowIntensity={1.5}
  scale={1.1}
  noiseScale={3}
  pupilFollow={0.5}
  flameSpeed={0.2}
  backgroundColor="#000000"
/>
      </div>

      <HeroSection />
      
      <div className="bg-black relative z-10 w-full">
        <div className="divider container-max" />
        <AboutSection />
        <div className="divider container-max" />
        <ProjectsPreview />
        <div className="divider container-max" />
        <SkillsSection />
        <div className="divider container-max" />
        <ContactCTA />
      </div>
    </>
  )
}
