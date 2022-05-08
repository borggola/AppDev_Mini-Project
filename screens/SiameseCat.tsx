import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { NativeElementButton } from "../components/Button";




export default function SiameseCat() {
    const navigation = useNavigation();
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'baseline',
        flexDirection: 'column',
    }}> 
      <Image
       source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg'}}
       style = {{
         height: '70%',
         width: '100%',
         marginTop: 13,
         resizeMode: 'contain'
        }}
         />
         <Text>* Average Weight: Male: 11 - 15 pounds Female: 8 - 12 pounds</Text>
         <Text>* Size: Medium to Large</Text>
         <Text>* Life expectancy: 12-15 years</Text>
         <Text>* Temperament: Active, Agile, Clever, Sociable, Loving, Energetic</Text>
         <Text>* Origin: Thailand</Text>
         <Text>* Hypoallergenic: Yes</Text>
    </View>

    );
}