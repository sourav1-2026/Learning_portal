// 55.27
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';

import {COLORS, SIZES, dummyData, FONTS} from '../constants';

type Categoryprop = {
  Category: any;
  index: number;
  containerStyle?: any;
};

export default function CategoryCard({
  Category,
  index,
  containerStyle,
}: Categoryprop) {
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
