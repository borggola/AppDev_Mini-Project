import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  BullDog  from '../screens/BullDog';
import { DogParamlist } from '../types';


const Stack = createNativeStackNavigator<DogParamlist>();

export default function BullNavi() {
  return (
    <Stack.Navigator 
     screenOptions={{
       headerShown: false,
     }}
    >
      <Stack.Screen 
      name="BullDog" 
      component={BullDog}
      options={{
        title: 'BullDog',
      }} />
     
      </Stack.Navigator>
  );
}