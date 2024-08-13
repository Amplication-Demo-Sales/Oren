import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const LeadEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="estimatedValue" source="estimatedValue" />
        <TextInput label="source" source="source" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
