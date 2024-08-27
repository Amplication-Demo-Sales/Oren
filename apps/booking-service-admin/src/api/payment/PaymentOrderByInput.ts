import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  bookingId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  method?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
