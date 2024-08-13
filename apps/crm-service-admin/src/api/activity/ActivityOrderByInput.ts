import { SortOrder } from "../../util/SortOrder";

export type ActivityOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
