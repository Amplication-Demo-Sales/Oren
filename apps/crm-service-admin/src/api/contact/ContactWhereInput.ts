import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContactWhereInput = {
  customer?: CustomerWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  phone?: StringNullableFilter;
  position?: StringNullableFilter;
};
