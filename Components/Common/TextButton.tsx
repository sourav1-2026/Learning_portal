import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {COLORS, FONTS, SIZES, icons, images, dummyData} from '../../constants';
import {useNavigation} from '@react-navigation/native';

type buttontypeProp = {
  text: string;
  disabled: boolean;
  contentContainerStyle: any;
  labeStyle: any;
  onPress?: () => void;
};
export default function TextButton({
  text,
  disabled,
  contentContainerStyle,
  labeStyle,
  onPress,
}: buttontypeProp) {
  return (
    <TouchableOpacity
      style={[contentContainerStyle]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={[labeStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}
