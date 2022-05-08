import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, StatusBar } from 'react-native';
import { TextInput } from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import { NativeElementButton } from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const siamese = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg',
  width: 200,
  height: 200
  
};

const bengal = {
  uri: 'data:image/jpeg;base64,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',
  width: 200,
  height: 200
};

const persian = {
  uri: 'https://easyscienceforkids.com/wp-content/uploads/2019/05/Persian-Cat-23-4-1-758x635.jpg',
  width: 200,
  height: 200
};
const russianblue = {
  uri: 'https://www.purina.co.uk/sites/default/files/2021-02/CAT%20HERO_0020_Russian_blue.jpg',
  width: 200,
  height: 200
};
const americancurl = {
  uri: 'https://www.thehappycatsite.com/wp-content/uploads/2018/03/american-curl-header.jpg',
  width: 200,
  height: 200
};

export default function CatsMenu() {
  const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Image
       source={siamese} />
       <NativeElementButton
             title="Siamese"
            onPress={() => navigation.navigate("SCNav")}
             containerStyle={{ width: '90%', alignSelf: 'center', marginTop: 20 }}
                        />
        <Image
       source={bengal} />
       <NativeElementButton
             title="Bengal"
            onPress={() => navigation.navigate("BCNav")}
             containerStyle={{ width: '90%', alignSelf: 'center', marginTop: 20 }}
                        />
                        <Image
       source={persian} />
       <NativeElementButton
             title="Persian"
            onPress={() => navigation.navigate("PCNav")}
             containerStyle={{ width: '90%', alignSelf: 'center', marginTop: 20 }}
                        />
                        <Image
       source={russianblue} />
       <NativeElementButton
             title="Russian Blue"
            onPress={() => navigation.navigate("RBCNav")}
             containerStyle={{ width: '90%', alignSelf: 'center', marginTop: 20 }}
                        />
                        <Image
       source={americancurl} />
       <NativeElementButton
             title="Americancurl"
            onPress={() => navigation.navigate("ACCNav")}
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