import { Contact } from "../contact/Contact";
import { Customer } from "../customer/Customer";

export type Activity = {
  contact?: Contact | null;
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  description: string | null;
  id: string;
  typeField: string | null;
  updatedAt: Date;
};
