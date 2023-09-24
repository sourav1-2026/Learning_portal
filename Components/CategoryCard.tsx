import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';

import {COLORS, SIZES, dummyData, icons, FONTS} from '../constants';

export default function CategoryCard({Category, index}: any) {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={Category.thumbnail}
        resizeMode="cover"
        style={[
          style.imagestyle,
          {
            marginLeft: index == 0 ? SIZES.padding : SIZES.base,
            marginRight:
              index == dummyData.courses_list_1.length - 1 ? SIZES.padding : 0,
          },
        ]}>
        <Text style={style.textstyle}>{Category.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  imagestyle: {
    height: 150,
    width: 200,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    justifyContent: 'flex-end',
  },
  textstyle: {
    color: COLORS.white,
    ...FONTS.h2,
  },
});
