import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  bookId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
