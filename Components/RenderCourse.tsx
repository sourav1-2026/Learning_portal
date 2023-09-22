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
        <CoursesCard
          containerStyle={{
            marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
            marginRight:
              index == dummyData.courses_list_1.length - 1 ? SIZES.padding : 0,
          }}
          course={item}
        />
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        marginTop: SIZES.padding,
      }}></FlatList>
  );
}
