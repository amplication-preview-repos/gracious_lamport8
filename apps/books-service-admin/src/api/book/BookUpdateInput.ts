import { ReviewUpdateManyWithoutBooksInput } from "./ReviewUpdateManyWithoutBooksInput";

export type BookUpdateInput = {
  author?: string | null;
  genre?: string | null;
  isAvailable?: boolean | null;
  publicationDate?: Date | null;
  reviews?: ReviewUpdateManyWithoutBooksInput;
  title?: string | null;
};
