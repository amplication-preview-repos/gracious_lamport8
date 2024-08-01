import { BookWhereUniqueInput } from "../book/BookWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  book?: BookWhereUniqueInput | null;
  content?: string | null;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
};
