import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import styles from './style'

export default ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('home')
        }, 3000)

    }, [])
    return (
        <View style={styles.container}>
            <Text>Splash Screen</Text>
            <ActivityIndicator size="small" color="#0000ff" />
        </View>
    )
}