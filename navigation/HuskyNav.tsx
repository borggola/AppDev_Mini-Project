import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HuskyDog  from '../screens/HuskyDog';
import { DogParamlist } from '../types';


const Stack = createNativeStackNavigator<DogParamlist>();

export default function HuskyNavi() {
  return (
    <Stack.Navigator 
     screenOptions={{
       headerShown: false,
     }}
    >
      <Stack.Screen 
      name="HuskyDog" 
      component={HuskyDog}
      options={{
        title: 'HuskyDog',
      }} />
     
      </Stack.Navigator>
  );
}