import React, { FC, useMemo } from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';

import { Text } from '../Text';

interface Props {
  text: string | undefined;
  style?: StyleProp<TextStyle>;
  required?: boolean;
}

const InputLabel: FC<Props> = ({ text, style, required }) => {
  const rootStyle = useMemo(() => [styles.label, style], [style]);

  const labelText = useMemo(() => {
    let finalText = '';

    if (text) {
      finalText = required ? `${text}*` : text;
    }

    return finalText;
  }, [required, text]);

  return text ? <Text style={rootStyle}>{labelText}</Text> : null;
};

export default InputLabel;

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
  },
});
