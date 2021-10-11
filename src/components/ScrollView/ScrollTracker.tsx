import React, { FC, useRef } from 'react';
import { FieldError, FieldErrors } from 'react-hook-form';
import { LayoutChangeEvent, View } from 'react-native';

interface Props {
  setYCoordinate: (name: string, yPos: number, index: number) => void;
  name: string;
  index: number;
  error: FieldError | FieldErrors | undefined;
}

export const ScrollTracker: FC<Props> = ({ children, setYCoordinate, name, index, error }) => {
  const viewRef = useRef<View>();

  const onLayout = ({
    nativeEvent: {
      layout: { y },
    },
  }: LayoutChangeEvent) => {
    if (viewRef.current && !error?.message) {
      viewRef.current.measure(() => {
        setYCoordinate(name, y, index);
      });
    }
  };

  const setRef = (ref: View) => {
    if (ref) {
      viewRef.current = ref;
    }
  };

  return (
    <View onLayout={onLayout} ref={setRef}>
      {children}
    </View>
  );
};
