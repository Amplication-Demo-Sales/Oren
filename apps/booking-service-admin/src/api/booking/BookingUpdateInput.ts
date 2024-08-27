import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentUpdateManyWithoutBookingsInput } from "./PaymentUpdateManyWithoutBookingsInput";

export type BookingUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  payments?: PaymentUpdateManyWithoutBookingsInput;
  status?: string | null;
};
