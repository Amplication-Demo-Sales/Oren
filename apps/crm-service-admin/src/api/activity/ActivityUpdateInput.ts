import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ActivityUpdateInput = {
  contact?: ContactWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  description?: string | null;
  typeField?: string | null;
};
