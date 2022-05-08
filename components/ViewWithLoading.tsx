import * as React from 'react';
import { KeyboardAvoidingView, StatusBar, Platform, StyleProp, StyleSheet, ViewStyle, SafeAreaView, View } from "react-native";
import Loader from "./Loader";
import { HeaderHeightContext } from "@react-navigation/elements";

interface HeaderProps {
    children: any,
    style?: StyleProp<ViewStyle>,
    loading: boolean,
}


const ViewWithLoading = (props: HeaderProps) => (
        <HeaderHeightContext.Consumer>
            {headerHeight => (
               <View style={styles.container}>
                    <SafeAreaView style={[styles.container, {
                        flex: 5,
                        zIndex: 1
                    }]}>
                        {props.children}
                        {props.loading && <Loader />}
                    </SafeAreaView>
                    </View>
            )}
        </HeaderHeightContext.Consumer>
    );
export default ViewWithLoading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});