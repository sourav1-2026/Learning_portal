import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';

import {COLORS, SIZES} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import StartLearning from '../../Components/StartLearning';
import RenderCourse from '../../Components/RenderCourse';
import LineDivider from '../../Components/LineDivider';
import RenderCategories from '../../Components/RenderCategories';

export default function Home(): JSX.Element {
  return (
    <SafeAreaView style={[style.conatiner]}>
      <ScrollView
        contentContainerStyle={style.contentContainer}
        showsVerticalScrollIndicator={false}>
        {/* start learning */}
        <StartLearning />

        {/* Course */}
        <RenderCourse />
        <LineDivider />
        <RenderCategories />
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
    paddingBottom: '10%',
  },
});
