import { ContactUpdateManyWithoutCustomersInput } from "./ContactUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  company?: string | null;
  contacts?: ContactUpdateManyWithoutCustomersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
