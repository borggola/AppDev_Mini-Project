import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CatParamlist } from '../types';
import RussianCat from '../screens/RussianCat';


const Stack = createNativeStackNavigator<CatParamlist>();

export default function RussianNavi() {
  return (
    <Stack.Navigator 
     screenOptions={{
       headerShown: false,
     }}
    >
      <Stack.Screen 
      name="RussianCat" 
      component={RussianCat}
      options={{
        title: 'RussianCat',
      }} />
     
      </Stack.Navigator>
  );
}