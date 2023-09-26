import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';

import {COLORS, FONTS, SIZES, icons, images} from '../../constants';
import RenderHeader from '../../Components/Profile/RenderHeader';
import ProfileCard from '../../Components/Profile/ProfileCard';
import ProfileSection1 from '../../Components/Profile/ProfileSection1';
import ProfileSection2 from '../../Components/Profile/ProfileSection2';

export default function Profile() {
  return (
    <View style={style.container}>
      {/*render Header */}
      <RenderHeader />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          paddingBottom: 150,
        }}>
        {/* profileCard */}
        <ProfileCard />
        <ProfileSection1 />

        {/* profile section 2 */}
        <ProfileSection2 />
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
