export type ProjectCategory =
  | "Logo Design"
  | "Book Cover"
  | "Social Media Post"
  | "Packaging"
  | "Flyers & Brochures"
  | "Brand Guidelines"
  | "UI/UX Design"
  | "Motion Graphics"
  | "Emotes "
  | "OverLay"
  ;

export interface Project {
  id: string;
  title: string;
  filter: ProjectCategory;
  type: "image" | "video";
  description: string;
  mainImage: string;
  coverImages: string[];
  color?: string;
}

export const projectCategories: ProjectCategory[] = [
  "Logo Design",
  "Book Cover",
  "Social Media Post",
  "Packaging",
  "Flyers & Brochures",
  "Brand Guidelines",
  "UI/UX Design",
  "Motion Graphics",
  "Emotes ",
  "OverLay"
];

export const projects: Project[] = [];
