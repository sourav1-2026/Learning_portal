import {View, Text} from 'react-native';
import React from 'react';

import {SIZES, dummyData} from '../constants';
import {FlatList} from 'react-native';
import CoursesCard from './CoursesCard';

export default function RenderCourse() {
  return (
    <FlatList
      horizontal
      data={dummyData.courses_list_1}
      keyExtractor={item => `Course-${item.id}`}
      renderItem={({item, index}) => (
        <CoursesCard course={item} index={index} />
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        marginTop: SIZES.padding,
      }}
    />
  );
}
