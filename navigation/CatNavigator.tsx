import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  CatsMenu  from '../screens/CatsMenu';
import { CatParamlist } from '../types';


const Stack = createNativeStackNavigator<CatParamlist>();

export default function CatNavigator() {
  return (
    <Stack.Navigator 
     screenOptions={{
       headerShown: false,
     }}
    >
      <Stack.Screen 
      name="Cat" 
      component={CatsMenu}
      options={{
        title: 'Cat',
      }} />
     
      </Stack.Navigator>
  );
}
