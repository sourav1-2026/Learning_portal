import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, images} from '../constants';
import LearningButton from './LearningButton';

export default function StartLearning() {
  return (
    <>
      <ImageBackground
        source={images.featured_bg_image}
        style={style.container}
        imageStyle={style.borderRadius}>
        {/* Info */}
        <View>
          <Text style={style.text1}>HOW TO</Text>
          <Text style={style.text2}>
            Make your brand more visible with our checklist
          </Text>
          <Text style={style.text3}> By Sourav shaw</Text>
        </View>
        {/* image */}
        <Image source={images.start_learning} style={style.imageStyle} />
        <LearningButton text="Start learning" disabled={false} />
      </ImageBackground>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    padding: 15,
  },
  borderRadius: {
    borderRadius: SIZES.radius,
  },
  text1: {
    color: COLORS.white,
    ...FONTS.body2,
  },
  text2: {
    color: COLORS.white,
    ...FONTS.h2,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  text3: {
    color: COLORS.white,
    ...FONTS.body4,
    marginTop: SIZES.radius,
  },
  imageStyle: {
    width: '100%',
    height: 110,
    marginTop: SIZES.padding,
  },
});
