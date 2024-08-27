import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const RoomEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="capacity" source="capacity" />
        <TextInput label="number" source="numberField" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
