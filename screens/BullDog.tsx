import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { NativeElementButton } from "../components/Button";




export default function BullDog() {
    const navigation = useNavigation();
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'baseline',
        flexDirection: 'column',
    }}> 
      <Image
       source={{uri: 'https://www.akc.org/wp-content/uploads/2017/11/Pug-On-White-01.jpg'}}
       style = {{
         height: '70%',
         width: '100%',
         marginTop: 13,
         resizeMode: 'contain'
        }}
         />
          <Text>* Average Weight: 9kg</Text>
          <Text>* Height: 30cm at the withers</Text>
          <Text>* Life expectancy: 12-15 years</Text>
          <Text>* Temperament: Stubborn, docile, clever, playful</Text>
          <Text>* Origin: China</Text>
          <Text>* Hypoallergenic: No</Text>
    </View>

    );
}