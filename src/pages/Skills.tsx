
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { skills } from "@/data/skills";
import { SkillType } from "@/types/skills";
import SkillFilters from "@/components/skills/SkillFilters";
import SkillsGrid from "@/components/skills/SkillsGrid";
import SkillDetail from "@/components/skills/SkillDetail";

const SkillsPage = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [showAllSkills, setShowAllSkills] = useState(true);
  const [filter, setFilter] = useState<"all" | SkillType>("all");
  const location = useLocation();
  const navigate = useNavigate();

  // Extract skill ID from URL hash if present
  useEffect(() => {
    const skillId = location.hash.replace('#', '');
    if (skillId && skills.some(s => s.id === skillId)) {
      setExpandedSkill(skillId);
      setShowAllSkills(false);
      // Scroll to top when a skill is selected
      window.scrollTo(0, 0);
    }
  }, [location]);

  const toggleSkillExpansion = (id: string) => {
    if (expandedSkill === id) {
      setExpandedSkill(null);
      setShowAllSkills(true);
      navigate('/skills');
    } else {
      setExpandedSkill(id);
      setShowAllSkills(false);
      navigate(`/skills#${id}`);
      // Scroll to top when expanding a skill
      window.scrollTo(0, 0);
    }
  };

  const backToAllSkills = () => {
    setExpandedSkill(null);
    setShowAllSkills(true);
    navigate('/skills');
  };

  // Filter skills based on selected category
  const filteredSkills = skills.filter(skill => 
    filter === "all" || skill.type === filter
  );

  // If a skill is expanded, only show that skill
  const displayedSkills = expandedSkill 
    ? skills.filter(skill => skill.id === expandedSkill)
    : filteredSkills;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {!expandedSkill && (
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Mes compétences</h1>
              
              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-lg text-muted-foreground">
                  Cette page présente les compétences techniques et comportementales que j'ai développées 
                  tout au long de mon parcours professionnel. Chaque compétence est illustrée par des exemples 
                  concrets issus de mes expériences.
                </p>
              </div>
            </>
          )}
          
          {expandedSkill && (
            <Button 
              onClick={backToAllSkills} 
              variant="outline" 
              className="mb-6"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Retour à toutes les compétences
            </Button>
          )}
          
          {!expandedSkill && (
            <SkillFilters filter={filter} onFilterChange={setFilter} />
          )}
          
          {expandedSkill ? (
            // Full page display for expanded skill
            displayedSkills.map((skill) => (
              <SkillDetail key={skill.id} skill={skill} />
            ))
          ) : (
            // Grid of skill cards
            <SkillsGrid skills={displayedSkills} onSkillExpand={toggleSkillExpansion} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
