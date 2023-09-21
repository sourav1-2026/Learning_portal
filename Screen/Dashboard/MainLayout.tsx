import {
  View,
  Text,
  Animated,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

import {COLORS, SIZES, FONTS} from '../../constants';
import constants from '../../constants/constants';

import TabBar from '../../Components/TabBar';

export default function MainLayout() {
  return (
    <View style={style.container}>
      <Text style={{padding: 5}}>MainLayout</Text>
      {/* content */}

      {/* bottom tab */}

      <TabBar />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
