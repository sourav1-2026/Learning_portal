import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';

import {SIZES, FONTS, COLORS, dummyData} from '../constants';

import CategoryCard from './CategoryCard';
import Section from './Section';

export default function CategorySection() {
  const handlepress = () => {
    console.log('Category pressed');
  };

  return (
    <View>
      <Section label="Categories" handlepress={handlepress} text="See All" />
      <FlatList
        horizontal
        data={dummyData.categories}
        keyExtractor={item => `Category-${item.id}`}
        renderItem={({item, index}) => (
          <CategoryCard Category={item} index={index} />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: SIZES.radius,
        }}
      />
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
