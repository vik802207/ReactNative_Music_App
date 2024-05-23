/* eslint-disable prettier/prettier */
import React from 'react'
import Trend from './Trend'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NewRelease from './NewRelease'
import Newscreen from './Newscreen'
import Imageslidr from './Imageslidr'

function Bich() {
  const Stack=createNativeStackNavigator();
  return (
   <>
   <NavigationContainer independent={true}>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Trend}/> 
      <Stack.Screen name="Newscreen" component={Newscreen} options={{title:''}}/>
      <Stack.Screen name="Imageslidr" component={Imageslidr} options={{title:''}}/> 

    </Stack.Navigator>
   </NavigationContainer>
   </>
  )
}

export default Bich