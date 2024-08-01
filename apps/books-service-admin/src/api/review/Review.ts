import { Book } from "../book/Book";
import { User } from "../user/User";

export type Review = {
  book?: Book | null;
  content: string | null;
  createdAt: Date;
  id: string;
  rating: number | null;
  updatedAt: Date;
  user?: User | null;
};
