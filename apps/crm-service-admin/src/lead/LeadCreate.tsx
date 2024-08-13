import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const LeadCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="estimatedValue" source="estimatedValue" />
        <TextInput label="source" source="source" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
