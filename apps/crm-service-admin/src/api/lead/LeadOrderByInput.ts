import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  createdAt?: SortOrder;
  estimatedValue?: SortOrder;
  id?: SortOrder;
  source?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
