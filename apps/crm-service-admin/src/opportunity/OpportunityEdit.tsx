import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const OpportunityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="expectedCloseDate" source="expectedCloseDate" />
        <TextInput label="stage" source="stage" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
