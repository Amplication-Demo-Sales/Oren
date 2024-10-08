import { ActivityListRelationFilter } from "../activity/ActivityListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  activities?: ActivityListRelationFilter;
  address?: StringNullableFilter;
  company?: StringNullableFilter;
  contacts?: ContactListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
};
