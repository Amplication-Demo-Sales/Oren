import { Customer } from "../customer/Customer";

export type Contact = {
  createdAt: Date;
  customer?: Customer | null;
  email: string | null;
  id: string;
  phone: string | null;
  position: string | null;
  updatedAt: Date;
};
