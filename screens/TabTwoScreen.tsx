import { useState } from 'react';
import { Image, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import {CustomText} from "../components/StyledText";


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ViewWithLoading from "../components/ViewWithLoading";
import LottieView from 'lottie-react-native'
import HeaderLottie from './HeaderLottie';
import FooterForgotpass from './FooterForgotpass';
import LoginForm from './loginform'

export default function TabTwoScreen() {
  const [loading, setLoading] = useState(false);
  

  const toggleLoading = () => {
    setLoading(!loading);
  };

  setTimeout(() => {
    setLoading(false);
    
  }, 3000);

  return (

    <ViewWithLoading loading={false}>

      
       <HeaderLottie/>
      <LoginForm
      setLoading={setLoading}
      />
    </ViewWithLoading>
  );
}