import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { NativeElementButton } from "../components/Button";




export default function RussianCat() {
    const navigation = useNavigation();
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'baseline',
        flexDirection: 'column',
    }}> 
      <Image
       source={{uri: 'https://www.purina.co.uk/sites/default/files/2021-02/CAT%20HERO_0020_Russian_blue.jpg'}}
       style = {{
         height: '70%',
         width: '100%',
         marginTop: 13,
         resizeMode: 'contain'
        }}
         />
     <Text>    * Average Weight: Male: 10 - 15 pounds Female: 7 - 12 pounds</Text>
       <Text> * Size: Medium</Text>
        <Text>  * Life expectancy: 10-16 years</Text>
        <Text> * Temperament: Active, Dependent, Easy Going, Gentle, Intelligent, Loyal, Playful, Quiet</Text>
        <Text> * Origin: Russia</Text>
        <Text>  * Hypoallergenic: Yes</Text>
    </View>

    );
}