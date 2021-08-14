import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
console.reportErrorsAsExceptions = false;

import Routes from './src/routes'

const Tab = createBottomTabNavigator();

export default function App() {
 return (
   <NavigationContainer>
      <Routes/>
   </NavigationContainer>
  );
}