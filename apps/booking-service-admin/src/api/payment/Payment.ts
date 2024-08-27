import { Booking } from "../booking/Booking";

export type Payment = {
  amount: number | null;
  booking?: Booking | null;
  createdAt: Date;
  id: string;
  method: string | null;
  status: string | null;
  updatedAt: Date;
};
