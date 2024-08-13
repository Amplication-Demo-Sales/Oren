import { ActivityListRelationFilter } from "../activity/ActivityListRelationFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContactWhereInput = {
  activities?: ActivityListRelationFilter;
  customer?: CustomerWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  phone?: StringNullableFilter;
  position?: StringNullableFilter;
};
