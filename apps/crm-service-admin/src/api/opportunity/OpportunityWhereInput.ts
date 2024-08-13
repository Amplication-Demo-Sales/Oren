import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OpportunityWhereInput = {
  expectedCloseDate?: DateTimeNullableFilter;
  id?: StringFilter;
  stage?: StringNullableFilter;
  value?: FloatNullableFilter;
};
