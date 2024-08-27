import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  capacity?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  numberField?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
