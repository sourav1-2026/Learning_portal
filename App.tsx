/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainLayout from './Screen/Dashboard/MainLayout';
import HeaderIcon from './Components/HeaderIcon';
import {COLORS, FONTS} from './constants';
import {SafeAreaView} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome Coder's"
          component={MainLayout}
          options={({navigation}) => ({
            // title: "Welcome Coder's",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <HeaderIcon />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTitleStyle: {
              fontSize: 20,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
