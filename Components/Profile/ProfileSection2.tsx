import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES, icons} from '../../constants';
import ProfileValue from './ProfileValue';
import LineDivider from '../LineDivider';
import ProfileRadioButton from './ProfileRadioButton';

export default function ProfileSection2() {
  const [newCourseNotification, setNewCourseNotification] = useState(false);
  const [StudyReminder, setStudyReminder] = useState(false);
  return (
    <View style={style.ProfileSectionContainer}>
      <ProfileValue icon={icons.star_1} value="Pages" />
      <LineDivider />
      <ProfileRadioButton
        icon={icons.new_icon}
        label="New Course Notification"
        isSelected={newCourseNotification}
        onPress={() => {
          setNewCourseNotification(!newCourseNotification);
        }}
      />
      <LineDivider />
      <ProfileRadioButton
        icon={icons.reminder}
        label="Study Reminder"
        isSelected={StudyReminder}
        onPress={() => {
          setStudyReminder(!StudyReminder);
        }}
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
