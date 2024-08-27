import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  booking?: BookingWhereUniqueInput | null;
  method?: string | null;
  status?: string | null;
};
