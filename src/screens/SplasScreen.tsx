
import React from 'react'
import { View, Text, Button, Platform, StyleSheet, StatusBar, TextInput, Image, Dimensions,TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { StackScreenProps } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any,any>{};

export const SplashScreen = ({navigation}:Props) => {


    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    source={require('../assets/img/logo2.png')}
                    style={styles.logo}
                />
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}>
                <Text style={styles.title}>Bienvenido a mi recolector MDY!</Text>
                <Text style={styles.text}>Iniciar sesión</Text>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('LoginScreen')}
                    >
                        <LinearGradient
                            colors={['#08d4c4','#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Empezar</Text>
                            <Icon
                                name="arrow-forward-outline"
                                color="#fff"
                                size={20}
                                style={styles.next}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#ff9a00'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo,
  },
  title: {
      color: '#05375a',
      fontSize: 25,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5,
      fontSize:15
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  },
  next:{
      marginLeft:5
  }
});