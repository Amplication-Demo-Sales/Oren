import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentCreateNestedManyWithoutBookingsInput } from "./PaymentCreateNestedManyWithoutBookingsInput";

export type BookingCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  payments?: PaymentCreateNestedManyWithoutBookingsInput;
  status?: string | null;
};
