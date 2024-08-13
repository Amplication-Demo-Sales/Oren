import { Activity } from "../activity/Activity";
import { Customer } from "../customer/Customer";

export type Contact = {
  activities?: Array<Activity>;
  createdAt: Date;
  customer?: Customer | null;
  email: string | null;
  id: string;
  phone: string | null;
  position: string | null;
  updatedAt: Date;
};
