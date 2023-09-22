import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HeaderIcon() {
  return (
    <View>
      <Ionicons name="notifications-outline" size={30} color={COLORS.black} />
    </View>
  );
}
