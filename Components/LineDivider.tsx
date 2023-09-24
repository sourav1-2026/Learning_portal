import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';

export default function LineDivider() {
  return <View style={style.conatiner}></View>;
}

const style = StyleSheet.create({
  conatiner: {
    height: 2,
    width: '100%',
    backgroundColor: COLORS.gray20,
    marginVertical: SIZES.padding,
  },
});
