import React, { useMemo } from 'react';
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldError,
  FieldPath,
  FieldValues,
} from 'react-hook-form';
import {
  Platform,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

import { Colors } from '../../styles';
import { Text } from '../Text';

import InputLabel from './Label';

export interface InputProps<TFieldValues> extends TextInputProps {
  label?: string;
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues, Record<string, any>>;
  required?: boolean;
  error?: FieldError;
  noBottomMargin?: boolean;
}

export function Input<TFieldValues extends FieldValues>({
  label,
  required,
  control,
  name,
  error,
  noBottomMargin,
  ...rest
}: InputProps<TFieldValues>) {
  const { message: errorMessage } = error ?? {};

  const onControllerRender = ({
    field: { onChange, value, onBlur, ref },
  }: {
    field: ControllerRenderProps<TFieldValues>;
  }) => {
    return (
      <TextInput
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        style={styles.textInput}
        {...rest}
        ref={ref}
      />
    );
  };

  const containerStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({
      marginBottom: noBottomMargin ? 0 : 20,
    }),
    [noBottomMargin],
  );

  return (
    <View style={containerStyle}>
      <View>
        <InputLabel text={label} required={required} />
      </View>
      <View style={styles.textInputWrapper}>
        <Controller control={control} name={name} render={onControllerRender} />
      </View>
      {errorMessage ? (
        <Text color="bittersweetRed" style={styles.error}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  textInputWrapper: {
    paddingVertical: Platform.select({
      ios: 12,
      android: 0,
    }),
    paddingHorizontal: 12,
    backgroundColor: Colors.bunker,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  error: {
    marginTop: 5,
  },
  textInput: {
    color: Colors.white,
    fontSize: 22,
    flex: 1,
    marginRight: 5,
  },
});
