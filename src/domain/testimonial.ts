type Author = {
  id: string;
  name: string;
  avatar: string;
};
export type Testimonial = {
  id: string;
  author: Author;
  rating: number;
  content: string;
};
