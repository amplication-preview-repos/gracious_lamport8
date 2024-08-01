import { Review } from "../review/Review";

export type Book = {
  author: string | null;
  createdAt: Date;
  genre: string | null;
  id: string;
  isAvailable: boolean | null;
  publicationDate: Date | null;
  reviews?: Array<Review>;
  title: string | null;
  updatedAt: Date;
};
