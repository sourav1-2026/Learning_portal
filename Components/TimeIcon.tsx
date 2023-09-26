import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {FONTS, SIZES, COLORS, icons} from '../constants';
import {Image} from 'react-native';

type TimeIconprop = {
  label?: string;
  iconstyle?: any;
  sourceIcon: any;
  labelStyle?: any;
};
export default function TimeIcon({
  label,
  iconstyle,
  sourceIcon,
  labelStyle,
}: TimeIconprop) {
  const iconStyle = iconstyle ? iconstyle : null;
  const label_Style = labelStyle ? labelStyle : null;
  return (
    <View style={style.container}>
      <Image
        style={[style.timeIcon, iconStyle]}
        source={sourceIcon}
        resizeMode="contain"
      />
      <Text style={[style.textstyle, label_Style]}>{label}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
