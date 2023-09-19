import {View, Text} from 'react-native';
import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import Home from '../Screen/Dashboard/Home';
import Profile from '../Screen/Dashboard/Profile';
import Search from '../Screen/Dashboard/Search';

import AntDesign from 'react-native-vector-icons/AntDesign';
import LottieView from 'lottie-react-native';

export default function TabBar() {
  const Tab = createBottomTabNavigator();
  return (
    // <Tab.Navigator
    //   screenOptions={{
    //     tabBarActiveTintColor: '#e91e63',
    //     tabBarActiveBackgroundColor: '#F3F3F3',
    //     tabBarLabelStyle: {
    //       fontSize: 12,
    //       fontWeight: 'bold',
    //       color: 'blue',
    //     },
    //   }}>
    //   <Tab.Screen
    //     name="Home"
    //     component={Home}
    //     options={{
    //       tabBarLabel: 'Home',
    //       tabBarIcon: ({color, size}) => (
    //         <Icon name="home" color={color} size={28} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen name="Profile" component={Profile} />
    //   <Tab.Screen name="Search" component={Search} />
    // </Tab.Navigator>

    // options -2:
    // --------------------

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
          return <AntDesign name={iconName} size={30} color="#900" />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>

    // <Tab.Navigator
    //   screenOptions={({route}) => ({
    //     tabBarIcon: ({focused, color, size}) => {
    //       let filePath;
    //       if (route.name === 'Home') {
    //         filePath = require('../Lottie/home.json');
    //       } else if (route.name === 'Profile') {
    //         filePath = require('../Lottie/Profile.json');
    //       } else {
    //         filePath = require('../Lottie/search.json');
    //       }
    //       <LottieView source={filePath} autoPlay={focused} />;
    //     },
    //     tabBarActiveTintColor: 'green',
    //     tabBarInactiveTintColor: 'gray',
    //   })}>
    //   <Tab.Screen name="Home" component={Home} />
    //   <Tab.Screen name="Profile" component={Profile} />
    //   <Tab.Screen name="Search" component={Search} />
    // </Tab.Navigator>

    // option -3:
    // ----------------
    // https://www.youtube.com/watch?v=8gTaXwmnuNE
  );
}
