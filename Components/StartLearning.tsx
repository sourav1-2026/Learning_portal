import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, icons, images, dummyData} from '../constants';

export default function StartLearning() {
  return (
    <ImageBackground
      source={images.featured_bg_image}
      style={style.container}></ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    padding: 15,
  },
  container2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    padding: 15,
  },
});
