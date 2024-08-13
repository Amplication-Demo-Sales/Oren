import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const OpportunityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="expectedCloseDate" source="expectedCloseDate" />
        <TextInput label="stage" source="stage" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
