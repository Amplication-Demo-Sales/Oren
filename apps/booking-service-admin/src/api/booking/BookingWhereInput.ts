import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BookingWhereInput = {
  customer?: CustomerWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  status?: StringNullableFilter;
};
