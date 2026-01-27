import { ComponentType } from "react";

export interface Course {
  name: string;
  description: string;
  semester: number;
  sks: number;
  icon: ComponentType<{ className?: string }>
}