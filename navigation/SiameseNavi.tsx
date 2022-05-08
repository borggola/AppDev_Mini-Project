import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  CatsMenu  from '../screens/SiameseCat';
import { CatParamlist } from '../types';
import SiameseCat from '../screens/SiameseCat';


const Stack = createNativeStackNavigator<CatParamlist>();

export default function SiameseNavi() {
  return (
    <Stack.Navigator 
     screenOptions={{
       headerShown: false,
     }}
    >
      <Stack.Screen 
      name="SiameseCat" 
      component={SiameseCat}
      options={{
        title: 'SiameseCat',
      }} />
     
      </Stack.Navigator>
  );
}
