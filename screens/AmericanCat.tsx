import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { NativeElementButton } from "../components/Button";




export default function AmericanCat() {
    const navigation = useNavigation();
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'baseline',
        flexDirection: 'column',
    }}> 
      <Image
       source={{uri: 'https://www.thehappycatsite.com/wp-content/uploads/2018/03/american-curl-header.jpg'}}
       style = {{
         height: '70%',
         width: '100%',
         marginTop: 13,
         resizeMode: 'contain'
        }}
         />
         <Text>* Average Weight: Male: 8 - 10 pounds Female: 6 - 8 pounds</Text>
          <Text>* size: medium-sized</Text>
          <Text>* Life expectancy: 12-16 years</Text>
          <Text>* Temperament: Affectionate, Curious, Intelligent, Interactive, Lively, Playful, Social</Text>
          <Text>* Origin: United States</Text>
          <Text>* Hypoallergenic: No</Text>
    </View>

    );
}