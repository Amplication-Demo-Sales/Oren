import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ActivityWhereInput = {
  contact?: ContactWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  typeField?: StringNullableFilter;
};
