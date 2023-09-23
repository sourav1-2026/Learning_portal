import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {FONTS, SIZES, COLORS, icons} from '../constants';
import {Image} from 'react-native';

type TimeIconprop = {
  label: string;
};
export default function TimeIcon({label}: TimeIconprop) {
  return (
    <View style={style.container}>
      <Image style={style.timeIcon} source={icons.time} resizeMode="contain" />
      <Text style={style.textstyle}>{label}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // ...containerstyle
  },
  timeIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray30,
    // ...iconStyle
  },
  textstyle: {
    marginLeft: SIZES.base,
    color: COLORS.gray30,
    ...FONTS.body3,
    // ...labelStyle
  },
});
