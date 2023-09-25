// 1.16.57

import {View, Text, Image, TextInput, FlatList, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import {COLORS, FONTS, SIZES, icons, dummyData} from '../../constants';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import TopSearches from '../../Components/Search/TopSearches';
import BrowseCategory from '../../Components/Search/BrowseCategory';
import RenderSearchBar from '../../Components/Search/RenderSearchBar';

export default function Search() {
  const scrollViewRef: any = useRef();
  const scrollY = useSharedValue(0);
  const InputRange = [0, 55];

  const onScroll = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });
  const searchBarAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        InputRange,
        [55, 0],
        Extrapolate.CLAMP,
      ),
      opacity: interpolate(
        scrollY.value,
        InputRange,
        [1, 0],
        Extrapolate.CLAMP,
      ),
    };
  });
  return (
    <View style={style.container}>
      <Animated.ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{
          marginTop: 100,
          paddingBottom: 300,
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        keyboardDismissMode="on-drag"
        onScroll={onScroll}
        onScrollEndDrag={event => {
          if (
            event.nativeEvent.contentOffset.y > 10 &&
            event.nativeEvent.contentOffset.y < 50
          ) {
            scrollViewRef.current?.scrollTo({
              x: 0,
              y: 60,
              animated: true,
            });
          }
        }}>
        {/* Top searches */}
        <TopSearches />

        {/* Browse Category */}
        <BrowseCategory />
      </Animated.ScrollView>
      <RenderSearchBar searchBarAnimatedStyle={searchBarAnimatedStyle} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
