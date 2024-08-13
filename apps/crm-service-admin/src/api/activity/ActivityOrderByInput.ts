import { SortOrder } from "../../util/SortOrder";

export type ActivityOrderByInput = {
  contactId?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
