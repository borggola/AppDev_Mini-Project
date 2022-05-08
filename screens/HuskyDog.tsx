import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { NativeElementButton } from "../components/Button";




export default function HuskyDog() {
    const navigation = useNavigation();
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'baseline',
        flexDirection: 'column',
    }}> 
      <Image
       source={{uri: 'https://www.akc.org/wp-content/uploads/2017/11/Siberian-Husky-standing-outdoors-in-the-winter.jpg'}}
       style = {{
         height: '70%',
         width: '100%',
         marginTop: 13,
         resizeMode: 'contain'
        }}
         />
       <Text> * Average Weight: 16kg to 27kg</Text>
       <Text> * Height: 50cm to 60cm at the withers</Text>
       <Text> * Life expectancy: 12-15 years</Text>
       <Text> * Temperament: Intelligent, friendly, alert, gentle</Text>
       <Text> * Origin: Siberia</Text>
       <Text> * Hypoallergenic: No</Text>
    </View>

    );
}