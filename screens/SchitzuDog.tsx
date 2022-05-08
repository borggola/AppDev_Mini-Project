import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { NativeElementButton } from "../components/Button";




export default function SchitzuDog() {
    const navigation = useNavigation();
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'baseline',
        flexDirection: 'column',
    }}> 
      <Image
       source={{uri: 'https://www.thesprucepets.com/thmb/AV6s4AL9uAcAobnwz0KdkW2UG08=/1333x1000/smart/filters:no_upscale()/shih-tzu-dog-breed-profile-1117999-hero-5541b7f6f936478ca766d85ff5af202e.jpeg'}}
       style = {{
         height: '70%',
         width: '100%',
         marginTop: 13,
         resizeMode: 'contain'
        }}
         />
         <Text>* Average Weight: 4kg to 7.2kg</Text>
          <Text>* Height: 20-28cm at the withers</Text>
          <Text>* Life expectancy: 10-16 years</Text>
          <Text>* Temperament: Lively, intelligent, affectionate, friendly</Text>
          <Text>* Origin: China</Text>
          <Text>* Hypoallergenic: Yes</Text>
    </View>

    );
}