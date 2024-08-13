import { ContactCreateNestedManyWithoutCustomersInput } from "./ContactCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  company?: string | null;
  contacts?: ContactCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
