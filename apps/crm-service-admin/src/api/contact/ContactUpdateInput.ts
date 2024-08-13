import { ActivityUpdateManyWithoutContactsInput } from "./ActivityUpdateManyWithoutContactsInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ContactUpdateInput = {
  activities?: ActivityUpdateManyWithoutContactsInput;
  customer?: CustomerWhereUniqueInput | null;
  email?: string | null;
  phone?: string | null;
  position?: string | null;
};
