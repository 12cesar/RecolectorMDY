import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ResetPasswordScreen } from '../screens/ResetPasswordScreen';
import { ValidateDniScreen } from '../screens/ValidateDniScreen';
import { PrivateScreen } from '../screens/PrivateScreen';
import { BottonNavigator } from './BottonNavigator';
import { SplashScreen } from '../screens/SplasScreen';

const Stack = createStackNavigator();

export const StackNavigator =() =>{
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
            cardStyle:{
              backgroundColor:'white'
            }
        }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
      <Stack.Screen name="ValidateDniScreen" component={ValidateDniScreen} />
      <Stack.Screen name="BottonNavigator" component={BottonNavigator} />
    </Stack.Navigator>
  );
}