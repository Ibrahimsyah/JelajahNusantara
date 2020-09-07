import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useDispatch } from 'react-redux'
import { setAccount } from '../../store/actions'
import storage from '../../providers/account'
import styles from './style'

export default ({ navigation }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        // storage.deleteAccount()
        storage.getAccount().then(res => {
            if (res) {
                dispatch(setAccount(res))
                navigation.replace('home')
            }else{
                navigation.replace('onboarding')
            }
        })
    }, [])
    return (
        <View style={styles.container}>
            <Text>Splash Screen</Text>
            <ActivityIndicator size="small" color="#0000ff" />
        </View>
    )
}