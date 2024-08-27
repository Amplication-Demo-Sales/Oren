import { Customer } from "../customer/Customer";
import { Payment } from "../payment/Payment";

export type Booking = {
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  payments?: Array<Payment>;
  status: string | null;
  updatedAt: Date;
};
