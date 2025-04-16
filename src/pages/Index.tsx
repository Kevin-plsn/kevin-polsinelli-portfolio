
import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ProfileSection />
        <ExperienceSection />
        <ProjectSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
