import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CatParamlist } from '../types';
import PersianCat from '../screens/PersianCat';


const Stack = createNativeStackNavigator<CatParamlist>();

export default function PersianNavi() {
  return (
    <Stack.Navigator 
     screenOptions={{
       headerShown: false,
     }}
    >
      <Stack.Screen 
      name="PersianCat" 
      component={PersianCat}
      options={{
        title: 'PersianCat',
      }} />
     
      </Stack.Navigator>
  );
}