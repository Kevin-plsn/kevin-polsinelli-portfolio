
import { Button } from "@/components/ui/button";
import { Computer, BrainCircuit, FileSpreadsheet } from "lucide-react";
import { SkillType } from "@/types/skills";

interface SkillFiltersProps {
  filter: "all" | SkillType;
  onFilterChange: (filter: "all" | SkillType) => void;
}

const SkillFilters = ({ filter, onFilterChange }: SkillFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8 justify-center">
      <Button 
        onClick={() => onFilterChange("all")}
        variant={filter === "all" ? "default" : "outline"}
        className="flex items-center gap-2"
      >
        Toutes les compétences
      </Button>
      <Button 
        onClick={() => onFilterChange("technique")}
        variant={filter === "technique" ? "default" : "outline"}
        className="flex items-center gap-2"
      >
        <Computer className="h-4 w-4" />
        Compétences techniques
      </Button>
      <Button 
        onClick={() => onFilterChange("comportementale")}
        variant={filter === "comportementale" ? "default" : "outline"}
        className="flex items-center gap-2"
      >
        <BrainCircuit className="h-4 w-4" />
        Compétences comportementales
      </Button>
      <Button 
        onClick={() => onFilterChange("generale")}
        variant={filter === "generale" ? "default" : "outline"}
        className="flex items-center gap-2"
      >
        <FileSpreadsheet className="h-4 w-4" />
        Compétences générales
      </Button>
    </div>
  );
};

export default SkillFilters;
