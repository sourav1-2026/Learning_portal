import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';

import {COLORS, SIZES, dummyData, FONTS} from '../../constants';

type Cardyprop = {
  Category: any;
  index: number;
  containerStyle?: any;
  labelstyle?: any;
};
export default function Card({
  Category,
  index,
  containerStyle,
  labelstyle,
}: Cardyprop) {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={Category.thumbnail}
        resizeMode="cover"
        style={[
          containerStyle,
          {
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.radius,
            justifyContent: 'flex-end',
          },
        ]}
        imageStyle={{
          borderRadius: SIZES.radius,
        }}>
        <Text style={labelstyle}>{Category.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
