
export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  longDescription: string;
  sections?: {
    title: string;
    content: string[];
  }[];
  skills: string[];
}
