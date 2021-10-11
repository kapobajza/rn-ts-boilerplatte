import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Button, Container, Input, ScrollTracker, TitledNavBar, Text } from '../../../components';
import {
  useUnsavedChanges,
  useForm,
  useRegisterAllFormFields,
  useAutoScroll,
} from '../../../hooks';
import { strings } from '../../../strings';
import { formSchema, ManyFieldsForm } from '../validation';

interface FormInputs {
  [ManyFieldsForm.Field1]: string;
  [ManyFieldsForm.Field2]: string;
  [ManyFieldsForm.Field3]: string;
  [ManyFieldsForm.Field4]: string;
  [ManyFieldsForm.Field5]: string;
  [ManyFieldsForm.Field6]: string;
  [ManyFieldsForm.Field7]: string;
  [ManyFieldsForm.Field8]: string;
  [ManyFieldsForm.Field9]: string;
  [ManyFieldsForm.Field10]: string;
}

export const FormScreen = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FormInputs>({
    schema: formSchema,
  });
  useUnsavedChanges(isDirty);
  useRegisterAllFormFields(register, ManyFieldsForm);
  const { setScrollRef, setYCoordinate, scrollTo } = useAutoScroll();

  const onSubmit = handleSubmit(
    () => {},
    (errors) => {
      scrollTo(Object.keys(errors));
    },
  );

  return (
    <Container>
      <TitledNavBar title={strings.formWithManyFields} />
      <KeyboardAwareScrollView
        enableResetScrollToCoords={false}
        ref={setScrollRef}
        keyboardShouldPersistTaps="handled">
        <Container spacing={16}>
          <Text>{strings.formHints}</Text>
          {Object.keys(ManyFieldsForm).map((key, index) => {
            const field = key as keyof typeof ManyFieldsForm;
            const name = ManyFieldsForm[field];
            const error = errors[ManyFieldsForm[field]];

            return (
              <ScrollTracker
                name={name}
                setYCoordinate={setYCoordinate}
                error={error}
                index={index}>
                <Input control={control} name={name} key={key} error={error} label={key} required />
              </ScrollTracker>
            );
          })}
          <Button title={strings.save} onPress={onSubmit} />
        </Container>
      </KeyboardAwareScrollView>
    </Container>
  );
};
