import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button } from 'react-native';

interface Props extends StackScreenProps<any,any>{};

export const LoginScreen = ({navigation}:Props) => {
    return (
        <View>
            <Text>Login Screen</Text>
            <Button
                title="ir a private"
                onPress={()=>navigation.navigate('BottonNavigator')}
            />
        </View>
    )
}
