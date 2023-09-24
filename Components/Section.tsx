import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Platform} from 'react-native';
import LearningButton from './LearningButton';

import {SIZES, FONTS, COLORS, dummyData} from '../constants';
import React from 'react';

type section = {
  label: string;
  handlepress: () => void;
  text: string;
};

export default function Section({label, handlepress, text}: section) {
  return (
    <View style={style.heading}>
      <Text style={style.textStyle}>{label}</Text>
      <View style={{borderRadius: Platform.OS === 'ios' ? 30 : 28}}>
        <LearningButton
          text={text}
          disabled={false}
          buttonColor={COLORS.primary}
          onPress={handlepress}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  conatiner: {
    // ...Containerstyle
  },

  heading: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
  },
  textStyle: {
    flex: 1,
    ...FONTS.h2,
    fontWeight: 'bold',
    color: COLORS.black,
  },
});
