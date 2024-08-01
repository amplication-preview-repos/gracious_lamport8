import { ReviewCreateNestedManyWithoutBooksInput } from "./ReviewCreateNestedManyWithoutBooksInput";

export type BookCreateInput = {
  author?: string | null;
  genre?: string | null;
  isAvailable?: boolean | null;
  publicationDate?: Date | null;
  reviews?: ReviewCreateNestedManyWithoutBooksInput;
  title?: string | null;
};
