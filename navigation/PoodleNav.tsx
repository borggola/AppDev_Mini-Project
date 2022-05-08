import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  PoodleDog  from '../screens/PoodleDog';
import { DogParamlist } from '../types';


const Stack = createNativeStackNavigator<DogParamlist>();

export default function PoodleNavi() {
  return (
    <Stack.Navigator 
     screenOptions={{
       headerShown: false,
     }}
    >
      <Stack.Screen 
      name="PoodleDog" 
      component={PoodleDog}
      options={{
        title: 'PoodleDog',
      }} />
     
      </Stack.Navigator>
  );
}