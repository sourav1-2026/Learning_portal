import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../Screen/Dashboard/Home';
import Profile from '../Screen/Dashboard/Profile';
import Search from '../Screen/Dashboard/Search';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES, FONTS} from '../constants';
import {Dimensions} from 'react-native';

export default function TabBar() {
  const Tab = createBottomTabNavigator();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'profile';
          } else {
            iconName = 'search1';
          }
          return <AntDesign name={iconName} size={30} color={COLORS.white} />;
        },
        tabBarActiveBackgroundColor: COLORS.primary,
        tabBarStyle: {
          backgroundColor: COLORS.primary3,

          borderRadius: SIZES.radius,
          height: windowHeight * 0.08,
          marginBottom: windowHeight * 0.02,
          marginHorizontal: windowWidth * 0.05,
          // paddingVertical: SIZES.radius,
          // paddingHorizontal: SIZES.padding,
        },
        tabStyle: {width: 'auto'},
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          color: COLORS.white,
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}
