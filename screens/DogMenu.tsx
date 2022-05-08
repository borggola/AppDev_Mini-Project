import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, StatusBar } from 'react-native';
import { TextInput } from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import { NativeElementButton } from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const husky = {
  uri: 'https://www.akc.org/wp-content/uploads/2017/11/Siberian-Husky-standing-outdoors-in-the-winter.jpg',
  width: 200,
  height: 200
  
};

const chihuahua = {
  uri: 'https://www.akc.org/wp-content/uploads/2017/11/Chihuahua-standing-in-three-quarter-view.jpg',
  width: 200,
  height: 200
};

const schitzu = {
  uri: 'https://www.thesprucepets.com/thmb/AV6s4AL9uAcAobnwz0KdkW2UG08=/1333x1000/smart/filters:no_upscale()/shih-tzu-dog-breed-profile-1117999-hero-5541b7f6f936478ca766d85ff5af202e.jpeg',
  width: 200,
  height: 200
};
const poodle = {
  uri: 'https://a-z-animals.com/media/Poodle-Canis-familiaris-white.jpg',
  width: 200,
  height: 200
};
const bull = {
  uri: 'https://www.akc.org/wp-content/uploads/2017/11/Pug-On-White-01.jpg',
  width: 200,
  height: 200
};

export default function DogMenu() {
  const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Image
       source={husky} />
       <NativeElementButton
             title="Husky"
            onPress={() => navigation.navigate("HDNav")}
             containerStyle={{ width: '90%', alignSelf: 'center', marginTop: 20 }}
                        />
        <Image
       source={chihuahua} />
       <NativeElementButton
             title="Chihuahua"
            onPress={() => navigation.navigate("CHHDNav")}
             containerStyle={{ width: '90%', alignSelf: 'center', marginTop: 20 }}
                        />
                        <Image
       source={schitzu} />
       <NativeElementButton
             title="Schitzu"
            onPress={() => navigation.navigate("SDNav")}
             containerStyle={{ width: '90%', alignSelf: 'center', marginTop: 20 }}
                        />
                        <Image
       source={poodle} />
       <NativeElementButton
             title="Poodle"
            onPress={() => navigation.navigate("PD")}
             containerStyle={{ width: '90%', alignSelf: 'center', marginTop: 20 }}
                        />
                        <Image
       source={bull} />
       <NativeElementButton
             title="Pug"
            onPress={() => navigation.navigate("BD")}
             containerStyle={{ width: '90%', alignSelf: 'center', marginTop: 20 }}
                        />
                        
     </ScrollView>
    </SafeAreaView>

    );
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems:'center'
    
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  image:{
    width: '50%',
    height: '50%'
  }
});