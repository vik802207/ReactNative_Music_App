/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Search from './Search';
import Firstshow from './Firstshow';
import Trend from './Trend';
import Bich from './Bich';
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#0D150D' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator()

function App() {
  return (
   
    <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Home" component={Bich} options={{tabBarIcon:(e)=>{
            return  <Ionicons name='home' size={24} color='black' />}}}/>
            <Tab.Screen name="Search" component={Search} 
            options={{tabBarIcon:(e)=>{
                return <FontAwesome name='search' size={24} color='black' />
                
                }}}/>
          
      
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;