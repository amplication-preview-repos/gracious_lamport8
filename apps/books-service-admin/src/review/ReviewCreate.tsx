import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { BookTitle } from "../book/BookTitle";
import { UserTitle } from "../user/UserTitle";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="book.id" reference="Book" label="Book">
          <SelectInput optionText={BookTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
        <NumberInput step={1} label="rating" source="rating" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
