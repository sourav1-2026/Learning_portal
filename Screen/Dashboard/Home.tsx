import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

import {COLORS, FONTS, SIZES, icons, images, dummyData} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import StartLearning from '../../Components/StartLearning';

export default function Home(): JSX.Element {
  return (
    <SafeAreaView style={[style.conatiner]}>
      <ScrollView contentContainerStyle={style.contentContainer}>
        {/* start learning */}
        <StartLearning></StartLearning>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    paddingVertical: 15,
  },
});
