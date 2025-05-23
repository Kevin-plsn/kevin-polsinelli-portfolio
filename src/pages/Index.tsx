
import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import PreviewSection from "@/components/PreviewSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ProfileSection />
        <ExperienceSection />
        <PreviewSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
