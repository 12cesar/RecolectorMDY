
import React from 'react'
import { View, Text, Button, Platform, StyleSheet, StatusBar, TextInput, Image, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { StackScreenProps } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> { };

export const LoginScreen = ({ navigation }: Props) => {

    const [data, setData] = React.useState({
        check_textInputChange: false,
        secureTextEntry: true,
        isValidPassword: true,
    });
    const textInputChange = (val: any) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                check_textInputChange: true,
            });
        } else {
            setData({
                ...data,
                check_textInputChange: false,
            });
        }
    }
    const handlePasswordChange = (val: any) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                isValidPassword: false
            });
        }
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#ff9a00' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Bienvenido!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Dni</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Tu Dni"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />

                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : null}
                </View>
                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Tu Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {
                            data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                        }

                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: 'black', marginTop: 15 }}>Forgot password?</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                    >
                        <LinearGradient
                            colors={['#ff9a00', '#ff9a00']}
                            style={styles.signIn}

                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.signUp}
                    >
                        <Text style={[styles.textSign, {
                            color: '#ff9a00'
                        }]}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff9a00'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,

    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        marginTop: 20
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    signUp: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#ff9a00',
        borderWidth: 1,
        marginTop: 15
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});