interface Faq {
  q: string;
  a: string;
}

export interface Room {
  number?: number;
  code?: string;
  image?: string;
  description?: string;
  location?: string;
  facility?: string[];
  summary?: string;
  regulation?: string[];
  photos?: string[];
  faqs?: Faq[];
}
