import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Section from './Section';
import {Platform} from 'react-native';
import {SIZES, dummyData} from '../constants';
import PopularCourseCard from './PopularCourseCard';
import LineDivider from './LineDivider';

export default function PopularCourses() {
  const handlepress = () => {
    console.log('Popular courses pressed');
  };
  return (
    <View style={style.container}>
      <Section
        label="PopularCourses"
        text="See All"
        handlepress={handlepress}
      />
      <FlatList
        data={dummyData.courses_list_2}
        keyExtractor={item => `PopularCourse-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: SIZES.radius,
        }}
        renderItem={({item, index}) => (
          <PopularCourseCard PopularCourse={item} index={index} />
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 30 : 28,
  },
});
