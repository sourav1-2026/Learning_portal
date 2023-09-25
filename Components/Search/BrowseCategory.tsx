import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {SIZES, FONTS, COLORS, dummyData} from '../../constants';
import Card from './Card';

export default function BrowseCategory() {
  return (
    <View style={style.conatiner}>
      <Text style={style.text}>Browse Categories</Text>
      <FlatList
        data={dummyData.categories}
        numColumns={2}
        scrollEnabled={false}
        keyExtractor={item => `BrowseCategories-${item.id}`}
        contentContainerStyle={{
          marginTop: SIZES.radius,
        }}
        renderItem={({item, index}) => (
          <Card
            Category={item}
            index={index}
            containerStyle={{
              height: 130,
              width: (SIZES.width - SIZES.padding * 2 - SIZES.radius) / 2,
              marginTop: SIZES.radius,
              marginLeft: (index + 1) % 2 == 0 ? SIZES.radius : SIZES.padding,
            }}
            labelstyle={{
              color: COLORS.white,
              ...FONTS.h2,
            }}
          />
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  conatiner: {
    marginTop: SIZES.padding,
  },
  text: {
    marginHorizontal: SIZES.padding,
    ...FONTS.h2,
    fontWeight: 'bold',
    color: COLORS.black,
  },
});
