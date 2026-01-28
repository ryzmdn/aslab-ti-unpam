type ActivityCategory = "kegiatan" | "asistensi";

export interface ActivityItem {
  src: string;
  caption: string;
  category: ActivityCategory;
};