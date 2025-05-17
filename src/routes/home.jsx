import ContactSection from '@/components/Section/ContactSection';
import InfoSection from '@/components/Section/InfoSection';
import ProjectSection from '@/components/Section/ProjectSection';
import SkillsSection from '@/components/Section/SkillsSection';
import ValuesSection from '@/components/Section/ValuesSection';

export default function Home() {
  return (
    <div className="space-y-32">
      <InfoSection />
      <ValuesSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
