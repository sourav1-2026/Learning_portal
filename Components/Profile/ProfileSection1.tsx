import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons} from '../../constants';
import ProfileValue from './ProfileValue';
import LineDivider from '../LineDivider';

export default function ProfileSection1() {
  return (
    <View style={style.ProfileSectionContainer}>
      <ProfileValue icon={icons.profile} label="Name" value="Sourav" />
      <LineDivider />
      <ProfileValue
        icon={icons.email}
        label="Email"
        value="Souravkshaw2019@gmail.com"
      />
      <LineDivider />
      <ProfileValue
        icon={icons.password}
        label="Password"
        value="Updated 2 week ago"
      />
      <LineDivider />
      <ProfileValue
        icon={icons.call}
        label="Contact Number"
        value="87451236895"
      />
    </View>
  );
}

const style = StyleSheet.create({
  ProfileSectionContainer: {
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    borderColor: COLORS.gray20,
  },
});
