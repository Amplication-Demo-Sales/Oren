import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  booking?: BookingWhereUniqueInput;
  id?: StringFilter;
  method?: StringNullableFilter;
  status?: StringNullableFilter;
};
