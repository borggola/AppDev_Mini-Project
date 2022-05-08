import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { NativeElementButton } from "../components/Button";




export default function PersianCat() {
    const navigation = useNavigation();
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'baseline',
        flexDirection: 'column',
    }}> 
      <Image
       source={{uri: 'https://easyscienceforkids.com/wp-content/uploads/2019/05/Persian-Cat-23-4-1-758x635.jpg'}}
       style = {{
         height: '70%',
         width: '100%',
         marginTop: 13,
         resizeMode: 'contain'
        }}
         />
      <Text>   * Average Weight: Males: 9-13 pounds Females: 8-12 pounds</Text>
      <Text>  * Size Medium to Large</Text>
       <Text>  * Life expectancy: 14-15 years</Text>
       <Text> * Temperament: Affectionate, loyal, Sedate, Quiet</Text>
       <Text> * Origin: Iran (Persia)</Text>
       <Text> * Hypoallergenic: No</Text>
    </View>

    );
}