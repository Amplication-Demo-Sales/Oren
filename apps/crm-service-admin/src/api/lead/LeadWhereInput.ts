import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LeadWhereInput = {
  estimatedValue?: FloatNullableFilter;
  id?: StringFilter;
  source?: StringNullableFilter;
  status?: StringNullableFilter;
};
