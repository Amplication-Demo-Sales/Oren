import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
