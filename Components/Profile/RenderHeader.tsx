import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SIZES, FONTS, icons, COLORS} from '../../constants';
import TimeIcon from '../TimeIcon';
import {Platform} from 'react-native';

export default function RenderHeader() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Profile</Text>
      <TimeIcon sourceIcon={icons.sun} iconstyle={{tintColor: COLORS.black}} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 50 : 48,
    paddingHorizontal: SIZES.padding,
    justifyContent: 'space-between',
  },
  text: {
    ...FONTS.h1,
    color: COLORS.black,
    fontWeight: 'bold',
  },
});
