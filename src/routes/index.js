import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Following from '../../src/screens/Following';
import ComingSoon from '../../src/screens/ComingSoon'

const Tab = createBottomTabNavigator();

export default function Routes() {
 return (
     <Tab.Navigator
     screenOptions={{
       tabBarStyle:{
         backgroundColor:"#010112",
         height:60,
         borderTopWidth:0,
         alignItems:'center',
         justifyContent:'center',
       },
       tabBarIconStyle:{
        flex:0,
        height:35,
        width:35
       },
       tabBarLabelStyle:{
         marginBottom:5,
         fontSize:11,
       },
       tabBarInactiveTintColor: "#bfbfc0",
       tabBarActiveTintColor: "#855fb4"
     }}>

      <Tab.Screen 
      name="Following" component={Following}
      options={{
        headerShown:false,
        tabBarIcon:({focused}) =>(
          <Icon name="heart" size={30} color={focused ? "#855fb4" : "#bfbfc0"}/>
        )
      }}/>
      <Tab.Screen 
      name="Discover" 
      component={ComingSoon} 
      options={{
      headerShown:false,
      tabBarIcon:({focused}) =>(
        <Icon name="compass-outline" size={30} color={focused ? "#805fb4" : "#bfbfc0"}/>
      )}}/>

      <Tab.Screen 
      name="Brower" 
      component={ComingSoon} 
      options={{
      headerShown:false,
      tabBarIcon:({focused}) =>(
        <Icon name="application" size={30} color={focused ? "#805fb4" : "#bfbfc0"}/>
      )}}/>

      <Tab.Screen 
      name="Esports" 
      component={ComingSoon} 
      options={{
      headerShown:false,
      tabBarIcon:({focused}) =>(
        <Icon name="trophy-outline" size={30} color={focused ? "#805fb4" : "#bfbfc0"}/>
      )}}/>
     </Tab.Navigator>
  );
}