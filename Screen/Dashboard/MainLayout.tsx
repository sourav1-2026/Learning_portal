import {StyleSheet} from 'react-native';
import React from 'react';

import {COLORS} from '../../constants';

import TabBar from '../../Components/TabBar';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function MainLayout() {
  return (
    <SafeAreaView style={style.container}>
      {/* content */}

      {/* bottom tab */}
      <TabBar />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
