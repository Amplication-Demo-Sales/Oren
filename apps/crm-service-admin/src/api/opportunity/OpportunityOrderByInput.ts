import { SortOrder } from "../../util/SortOrder";

export type OpportunityOrderByInput = {
  createdAt?: SortOrder;
  expectedCloseDate?: SortOrder;
  id?: SortOrder;
  stage?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
