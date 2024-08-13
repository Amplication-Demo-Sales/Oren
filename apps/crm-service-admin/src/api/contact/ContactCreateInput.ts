import { ActivityCreateNestedManyWithoutContactsInput } from "./ActivityCreateNestedManyWithoutContactsInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ContactCreateInput = {
  activities?: ActivityCreateNestedManyWithoutContactsInput;
  customer?: CustomerWhereUniqueInput | null;
  email?: string | null;
  phone?: string | null;
  position?: string | null;
};
