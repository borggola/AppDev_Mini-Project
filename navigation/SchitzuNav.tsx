import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  SchitzuDog  from '../screens/SchitzuDog';
import { DogParamlist } from '../types';


const Stack = createNativeStackNavigator<DogParamlist>();

export default function SchitzuNavi() {
  return (
    <Stack.Navigator 
     screenOptions={{
       headerShown: false,
     }}
    >
      <Stack.Screen 
      name="Schitzu" 
      component={SchitzuDog}
      options={{
        title: 'SchitzuDog',
      }} />
     
      </Stack.Navigator>
  );
}