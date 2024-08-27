import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoomWhereInput = {
  capacity?: IntNullableFilter;
  id?: StringFilter;
  numberField?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
