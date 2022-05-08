import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  DogMenu  from '../screens/DogMenu';
import { DogParamlist } from '../types';


const Stack = createNativeStackNavigator<DogParamlist>();

export default function DogNavigator() {
  return (
    <Stack.Navigator 
     screenOptions={{
       headerShown: false,
     }}
    >
      <Stack.Screen 
      name="Dog" 
      component={DogMenu}
      options={{
        title: 'Dog',
      }} />
     
      </Stack.Navigator>
  );
}