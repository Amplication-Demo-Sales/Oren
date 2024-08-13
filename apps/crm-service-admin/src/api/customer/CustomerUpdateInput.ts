import { ActivityUpdateManyWithoutCustomersInput } from "./ActivityUpdateManyWithoutCustomersInput";
import { ContactUpdateManyWithoutCustomersInput } from "./ContactUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  activities?: ActivityUpdateManyWithoutCustomersInput;
  address?: string | null;
  company?: string | null;
  contacts?: ContactUpdateManyWithoutCustomersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
