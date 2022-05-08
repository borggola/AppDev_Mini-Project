import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CatParamlist } from '../types';
import BengalCat from '../screens/BengalCat';


const Stack = createNativeStackNavigator<CatParamlist>();

export default function BengalNavi() {
  return (
    <Stack.Navigator 
     screenOptions={{
       headerShown: false,
     }}
    >
      <Stack.Screen 
      name="BengalCat" 
      component={BengalCat}
      options={{
        title: 'BengalCat',
      }} />
     
      </Stack.Navigator>
  );
}
