import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  phone?: SortOrder;
  position?: SortOrder;
  updatedAt?: SortOrder;
};
