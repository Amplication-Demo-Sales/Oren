import { Activity } from "../activity/Activity";
import { Contact } from "../contact/Contact";

export type Customer = {
  activities?: Array<Activity>;
  address: string | null;
  company: string | null;
  contacts?: Array<Contact>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  updatedAt: Date;
};
