import * as React from "react";
import {StyleSheet, View} from "react-native";
import LottieView  from 'lottie-react-native';

export default function HeaderLottie() {
    return(
        <View style={styles.lottieContainer}>
            <LottieView
            style={{flex: 1}}
            source={require('../assets/Lotties/95171-colors.json')}
            loop={true}
            autoPlay={true}
            />
            </View>
    );
}

const styles = StyleSheet.create({
    lottieContainer: {
        flex: 0.3,
        margin: 10,
        alignItems: 'center'
    }
})