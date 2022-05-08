import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { NativeElementButton } from "../components/Button";




export default function PoodleDog() {
    const navigation = useNavigation();
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'baseline',
        flexDirection: 'column',
    }}> 
      <Image
       source={{uri: 'https://a-z-animals.com/media/Poodle-Canis-familiaris-white.jpg'}}
       style = {{
         height: '70%',
         width: '100%',
         marginTop: 13,
         resizeMode: 'contain'
        }}
         />
          <Text>* Average Weight: Toy Poodle - 2.7kg to 4kg; Miniature Poodle - 7kg to 8kg; Standard Poodle - 21kg to 27kg</Text>
          <Text>* Height: Toy Poodle - 24cm to 28cm; Miniature Poodle - 28cm to 35cm; Standard Poodle - 45cm to 60cm</Text>
          <Text>* Life expectancy: 12-15 years</Text>
          <Text>* Temperament: Intelligent, active, faithful, trainable</Text>
          <Text>* Origin: Germany, France</Text>
          <Text>* Hypoallergenic: Yes</Text>
    </View>

    );
}