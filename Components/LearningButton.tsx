import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {COLORS, FONTS, SIZES, icons, images, dummyData} from '../constants';
import {useNavigation} from '@react-navigation/native';

type buttontype = {
  text: string;
  disabled: boolean;
};

export default function LearningButton({text, disabled}: buttontype) {
  const navigation = useNavigation();
  function handlePress(): void {
    // navigation.navigate('Home')
    console.log('pressed');
  }
  return (
    <TouchableOpacity
      style={style.ButtonConatiner}
      disabled={disabled}
      onPress={handlePress}>
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  ButtonConatiner: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: COLORS.black,
    fontWeight: 'bold',
    ...FONTS.h3,
  },
});
