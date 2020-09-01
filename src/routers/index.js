import React from 'react'
import { StatusBar, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/Home'
import Splash from '../views/SplashScreen'

const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <StatusBar translucent backgroundColor="transparent" />
            <Stack.Navigator headerMode="none">
                {/* <Stack.Screen name="splash" component={Splash} /> */}
                <Stack.Screen name="home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>)
}