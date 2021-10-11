import React from 'react';

import { Button, Container, Input, TitledNavBar } from '../../../components';
import { useForm, useRegisterAllFormFields, useUnsavedChanges } from '../../../hooks';
import { strings } from '../../../strings';
import { useAddUserMutation } from '../hooks/useAddUserMutation';
import { AddUserField, addUserSchema } from '../validation';

interface FormInputs {
  [AddUserField.Name]: string;
}

export const AddUserScreen = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FormInputs>({
    schema: addUserSchema,
  });
  useUnsavedChanges(isDirty);
  const { mutate, isLoading } = useAddUserMutation();

  useRegisterAllFormFields(register, AddUserField);

  const onAddUserPress = handleSubmit(({ name }) => {
    mutate({ name });
  });

  return (
    <Container>
      <TitledNavBar title={strings.addUser} />
      <Container spacing={16}>
        <Input
          control={control}
          name={AddUserField.Name}
          label={strings.userNameField}
          error={errors.name}
          required
        />
        <Button title={strings.save} onPress={onAddUserPress} loading={isLoading} />
      </Container>
    </Container>
  );
};
