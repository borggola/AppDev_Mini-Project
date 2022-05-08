import { useState } from 'react';
import { Image, StyleSheet, TextInput, ImageBackground } from 'react-native';
import { Button } from "react-native-elements";
import {CustomText} from "../components/StyledText";
import { NativeElementButton } from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Font } from 'react-native-paper/lib/typescript/types';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ViewWithLoading from "../components/ViewWithLoading";
import LottieView from 'lottie-react-native'
import HeaderLottie from './HeaderLottie';
import FooterForgotpass from './FooterForgotpass';
import HeaderLottie2 from './HeaderLottie2';
import RegisterForm from './registerform';
import HeaderLottie3 from './HeaderLottie3';
import { cp } from 'fs';
import { color } from 'react-native-elements/dist/helpers';

export default function HomeScreen() {
    const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  

  const toggleLoading = () => {
    setLoading(!loading);
  };

  setTimeout(() => {
    setLoading(false);
    
  }, 3000);

  const image = { uri: "https://png.pngtree.com/thumb_back/fw800/background/20201208/pngtree-simple-pet-cat-paw-hand-drawn-background-image_503838.jpg" };

  return (
    <><HeaderLottie3 /><View style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          alignItems: 'center',
          flexDirection: 'column'
      }}>
           <ImageBackground source={image} resizeMode="cover" style={styles.image}>
               <Text style={{
                   fontSize:50,
                   fontStyle:'italic',
                   textAlign: 'center',
                   color:'blue'
               }}
               >Info Pets</Text>
               <Text style={{
                   fontSize:50,
                   fontStyle:'italic',
                   textAlign: 'center',
                   color:'blue'
               }}
               ></Text>

          <NativeElementButton
             title="Cats"
            onPress={() => navigation.navigate("CatNav")}
             containerStyle={{ width: '90%', alignSelf: 'center', marginTop: 20 }}
                        />
            <TextInput style={{
                textAlign: 'center',
                fontWeight: "bold"
            }}>OR</TextInput>
            
            <NativeElementButton
             title="Dogs"
            onPress={() => navigation.navigate("DogNav")}
             containerStyle={{ width: '90%', alignSelf: 'center', marginTop: 20 }}
                        />
                        </ImageBackground>
      </View>
    
      </>



  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      width: '100%'
      
    },
  });
