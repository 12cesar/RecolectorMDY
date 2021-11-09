import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PrivateScreen } from '../screens/PrivateScreen';
import { MapasScreen } from '../screens/MapasScreen';
import { MultasScreen } from '../screens/MultasScreen';
import { MensajesScreen } from '../screens/MensajesScreen';
import { PerfilScreen } from '../screens/PerfilScreen';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const BottonNavigator=()=> {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      headerStyle: {
        elevation: 1,
        shadowColor: 'transparent',
        backgroundColor: 'white'
      },
      tabBarStyle:{
        backgroundColor:'#ff9a00',
      },
      tabBarIcon: ({ color, focused }) => {
        let iconName: string = '';
        switch (route.name) {
          case 'Mapa':
            iconName = 'navigate-circle-outline'
            break;
          case 'Multa':
            iconName = 'document-text-outline'
            break;
          case 'Mensaje':
            iconName = 'chatbox-outline'
            break;
          case 'Perfil':
            iconName = 'person-circle-outline'
            break;
          default:
            break;
        }
        return <Text style={{ color }}><Icon name={iconName} size={30} color='black' /></Text>
      },
      tabBarLabelStyle:{
        fontSize:0,
      }
    })}
    >
      <Tab.Screen name="Mapa" options={{title:''}} component={MapasScreen} />
      <Tab.Screen name="Multa" options={{title:''}} component={MultasScreen} />
      <Tab.Screen name="Mensaje" options={{title:''}} component={MensajesScreen} />
      <Tab.Screen name="Perfil" options={{title:''}} component={PerfilScreen} />
    </Tab.Navigator>
  );
}