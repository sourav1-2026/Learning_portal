import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {SIZES, FONTS, dummyData, COLORS} from '../../constants';
import LearningButton from '../LearningButton';

export default function TopSearches() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Top Searches</Text>
      <FlatList
        horizontal
        data={dummyData.top_searches}
        keyExtractor={item => `Topsearches-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: SIZES.radius,
        }}
        renderItem={({item, index}) => (
          <LearningButton
            text={item.label}
            disabled={false}
            buttonColor={COLORS.gray20}
          />
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
  },
  text: {
    marginHorizontal: SIZES.padding,
    ...FONTS.h2,
    fontWeight: 'bold',
    color: COLORS.black,
  },
});
