import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons, images, FONTS} from '../../constants';

type progressProp = {
  containerStyle: any;
  progress: number;
};

export default function PrograssBar({containerStyle, progress}: progressProp) {
  return (
    <View style={[style.container, containerStyle]}>
      <View style={[style.progress, {width: `${progress}%`}]}></View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: Platform.OS == 'ios' ? 13 : 11,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  progress: {
    position: 'absolute',
    left: 0,
    height: '100%',
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
});
