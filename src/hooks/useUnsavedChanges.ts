import {
  EventListenerCallback,
  EventMapCore,
  StackNavigationState,
  useNavigation,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NativeStackNavigationEventMap } from '@react-navigation/native-stack/lib/typescript/src/types';
import { useEffect, useRef } from 'react';
import { Alert } from 'react-native';

import { strings } from '../strings';

export function useUnsavedChanges(isFormDirtyOrConditionCb: boolean | (() => boolean)) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const unsubscribe = useRef<() => void>();

  useEffect(() => {
    const onBeforeRemove: EventListenerCallback<
      NativeStackNavigationEventMap & EventMapCore<StackNavigationState<any>>,
      'beforeRemove'
    > = (e) => {
      if (typeof isFormDirtyOrConditionCb === 'boolean' && !isFormDirtyOrConditionCb) {
        return;
      } else if (typeof isFormDirtyOrConditionCb === 'function') {
        if (!isFormDirtyOrConditionCb()) {
          return;
        }
      }

      e.preventDefault();

      const onYesPress = () => navigation.dispatch(e.data.action);

      Alert.alert(strings.warning, strings.youHaveUnsavedChanges, [
        {
          text: strings.yes,
          onPress: onYesPress,
        },
        {
          text: strings.cancel,
        },
      ]);
    };

    unsubscribe.current = navigation.addListener('beforeRemove', onBeforeRemove);

    return () => {
      navigation.removeListener('beforeRemove', onBeforeRemove);
    };
  }, [isFormDirtyOrConditionCb, navigation]);

  return unsubscribe.current;
}
