import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {COLORS, SIZES, icons, FONTS} from '../../constants';

export default function RenderSearchBar({searchBarAnimatedStyle}: any) {
  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          top: 50,
          left: 0,
          right: 0,
          paddingHorizontal: SIZES.padding,
          height: 50,
        },
        searchBarAnimatedStyle,
      ]}>
      <Shadow>
        <View style={style.container}>
          <Image
            source={icons.search}
            style={{width: 25, height: 25, tintColor: COLORS.gray40}}
          />
          <TextInput
            style={style.textInput}
            value=""
            placeholder="Search for Topics,Courses & Education"
            placeholderTextColor={COLORS.gray20}
          />
        </View>
      </Shadow>
    </Animated.View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: SIZES.width - SIZES.padding * 2,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  textInput: {
    flex: 1,
    marginLeft: SIZES.base,
    ...FONTS.h3,
  },
});
