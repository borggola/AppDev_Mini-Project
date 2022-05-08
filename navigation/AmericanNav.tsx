import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CatParamlist } from '../types';
import AmericanCat from '../screens/AmericanCat';


const Stack = createNativeStackNavigator<CatParamlist>();

export default function AmericanNavi() {
  return (
    <Stack.Navigator 
     screenOptions={{
       headerShown: false,
     }}
    >
      <Stack.Screen 
      name="AmericanCat" 
      component={AmericanCat}
      options={{
        title: 'AmericanCat',
      }} />
     
      </Stack.Navigator>
  );
}
