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
import HeaderLottie2 from './HeaderLottie2';
import RegisterForm from './registerform';

export default function TabOneScreen() {
  const [loading, setLoading] = useState(false);
  

  const toggleLoading = () => {
    setLoading(!loading);
  };

  setTimeout(() => {
    setLoading(false);
    
  }, 3000);

  return (

    <ViewWithLoading loading={false}>

      
       <HeaderLottie2/>
      <RegisterForm
      setLoading={setLoading}
      />
    </ViewWithLoading>
  );
}