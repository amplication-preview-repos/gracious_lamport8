import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type BookWhereInput = {
  author?: StringNullableFilter;
  genre?: StringNullableFilter;
  id?: StringFilter;
  isAvailable?: BooleanNullableFilter;
  publicationDate?: DateTimeNullableFilter;
  reviews?: ReviewListRelationFilter;
  title?: StringNullableFilter;
};
