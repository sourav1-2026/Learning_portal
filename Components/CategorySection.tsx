import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {Platform} from 'react-native';
import {SIZES, FONTS, COLORS, dummyData} from '../constants';
import LearningButton from './LearningButton';
import CategoryCard from './CategoryCard';

export default function CategorySection() {
  const handlepress = () => {
    console.log('Category Button pressed');
  };
  return (
    <View>
      <View style={style.heading}>
        <Text style={style.textStyle}>CategorySection</Text>
        <View style={{borderRadius: Platform.OS === 'ios' ? 30 : 28}}>
          <LearningButton
            text="see All"
            disabled={false}
            buttonColor={COLORS.primary}
            onPress={handlepress}
          />
        </View>
      </View>
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
