import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { NativeElementButton } from "../components/Button";




export default function ChihuahuaDog() {
    const navigation = useNavigation();
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'baseline',
        flexDirection: 'column',
    }}> 
      <Image
       source={{uri: 'https://www.akc.org/wp-content/uploads/2017/11/Chihuahua-standing-in-three-quarter-view.jpg'}}
       style = {{
         height: '70%',
         width: '100%',
         marginTop: 13,
         resizeMode: 'contain'
        }}
         />
         <Text>* Average Weight: 1.5kg to 3kg</Text>
         <Text>* Height: 15cm to 23cm at the withers</Text>
         <Text>* Life expectancy: 12-20 years</Text>
         <Text>* Temperament: Devoted, lively, alert, courageous</Text>
         <Text>* Origin: Mexico</Text>
         <Text>* Hypoallergenic: No</Text>
    </View>
    );
}