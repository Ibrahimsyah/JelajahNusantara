import React from 'react'
import { StatusBar, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../views/SplashScreen'
import Home from '../views/Home'
import DetailPulau from '../views/DetailPulau'
import AturanMain from '../views/AturanMain'
import RuangBaca from '../views/RuangBaca'
import Kuis from '../views/Kuis'
import Onboarding from '../views/Onboarding'
import Registrasi from '../views/Registrasi'

const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <StatusBar translucent backgroundColor="transparent" />
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="splash" component={Splash} />
                <Stack.Screen name="onboarding" component={Onboarding} />
                <Stack.Screen name="registrasi" component={Registrasi} />
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="detail-pulau" component={DetailPulau}/>
                <Stack.Screen name="aturan-main" component={AturanMain}/>
                <Stack.Screen name="ruang-baca" component={RuangBaca} />
                <Stack.Screen name="kuis" component={Kuis} />
            </Stack.Navigator>
        </NavigationContainer>)
}