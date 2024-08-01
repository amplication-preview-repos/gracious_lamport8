import { SortOrder } from "../../util/SortOrder";

export type BookOrderByInput = {
  author?: SortOrder;
  createdAt?: SortOrder;
  genre?: SortOrder;
  id?: SortOrder;
  isAvailable?: SortOrder;
  publicationDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
