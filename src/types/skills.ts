
import React from "react";

export type SkillType = "technique" | "comportementale" | "generale";

export type Skill = {
  id: string;
  icon: React.ReactNode;
  title: string;
  type: SkillType;
  definition: string;
  application: string;
  assessment: string;
  relatedProjects: string[];
};
