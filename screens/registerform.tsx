import * as React from "react";
import { Alert, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import * as yup from "yup";
import { Formik } from 'formik';
import TextField from "../components/TextInput/TextField";
import { commonColor } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { NativeElementButton } from "../components/Button";
import { useState } from "react";

interface IProps {
    setLoading: (value: boolean) => void;
}

export default function RegisterForm(props: IProps) {
    const navigation = useNavigation();

    const [passwordEye, setPasswordEye] = useState<boolean>(true);
    const toggleEye = () => setPasswordEye((previousState) => !previousState);


    const loginSchema = yup.object({
        email: yup.string().required('Email is required'),
        password: yup.string().required('Password is required'),
    });

    const handleRegister = (email: string, password: string) => {
        props.setLoading(true);
    }

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    firstname:'',
                    lastname:'',
                    email: '',
                    password: '',
                    retypepassword:''
                }}
                validationSchema={loginSchema}
                onSubmit={(values, actions) => {
                    handleRegister(values.email, values.password);
                }}
            >
                {({ handleChange, handleSubmit, values, touched, errors }) => (
                    <View style={{ flex: 0, width: '100%' }}>
                        <TextField
                            style={styles.textFieldStyle}
                            value={values.lastname}
                            placeholder={'Last Name'}
                            onChange={handleChange('lastname')}
                            textType={"none"}
                            shadow={true}
                            divider={false}
                            errorMessage={errors.lastname}
                            touched={touched.lastname}
                            containerStyle={{ marginBottom: 20 }}

                        />

                        <TextField
                            style={styles.textFieldStyle}
                            value={values.firstname}
                            placeholder={'First Name'}
                            onChange={handleChange('firstname')}
                            textType={"none"}
                            shadow={true}
                            divider={false}
                            errorMessage={errors.firstname}
                            touched={touched.firstname}
                            containerStyle={{ marginBottom: 20 }}

                        />
                        <TextField
                            style={styles.textFieldStyle}
                            value={values.email}
                            placeholder={'Email'}
                            onChange={handleChange('email')}
                            textType={"none"}
                            shadow={true}
                            divider={false}
                            errorMessage={errors.email}
                            touched={touched.email}
                            containerStyle={{ marginBottom: 20 }}
                        />

                        <TextField
                            style={styles.textFieldStyle}
                            value={values.password}
                            iconRightName={passwordEye ? "eye-off-outline" : "eye-outline"}
                            placeholder={'Password'}
                            iconVisible={true}
                            onPressRightIcon={toggleEye}
                            onChange={handleChange('password')}
                            textType={"password"}
                            secureTextEntry={passwordEye}
                            autofocus={false}
                            shadow={true}
                            divider={false}
                            iconColor={commonColor.main}
                            errorMessage={errors.password}
                            touched={touched.password}
                        />
                        <TextField
                            style={styles.textFieldStyle}
                            value={values.retypepassword}
                            iconRightName={passwordEye ? "eye-off-outline" : "eye-outline"}
                            placeholder={'Retype Password'}
                            iconVisible={true}
                            onPressRightIcon={toggleEye}
                            onChange={handleChange('password')}
                            textType={"password"}
                            secureTextEntry={passwordEye}
                            autofocus={false}
                            shadow={true}
                            divider={false}
                            iconColor={commonColor.main}
                            errorMessage={errors.retypepassword}
                            touched={touched.retypepassword}
                        />
                       
                        <NativeElementButton
                            title="Submit"
                            onPress={handleSubmit}
                            containerStyle={{ width: '90%', alignSelf: 'center', marginTop: 20 }}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    forgotTextStyle: {
        fontSize: 14
    },
    textFieldStyle: {
        flex: 0,
        height: 45,
        paddingVertical: 10,
        borderRadius: 10,
        paddingRight: 5
    },
});