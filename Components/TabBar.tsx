import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../Screen/Dashboard/Home';
import Profile from '../Screen/Dashboard/Profile';
import Search from '../Screen/Dashboard/Search';

export default function TabBar() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        // tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.1)',
        // headerShown: false,
        tabBarActiveBackgroundColor: '#F3F3F3',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // title: 'Home3',
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={28} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            color: 'blue',
          },
          // tabBarAccessibilityLabel: 'Navigate to Home',
        }}
      />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}
