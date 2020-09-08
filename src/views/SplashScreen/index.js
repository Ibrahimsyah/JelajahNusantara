import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useDispatch } from 'react-redux'
import { setAccount } from '../../store/account.action'
import { setProgress } from '../../store/savegame.action'
import account from '../../providers/account'
import styles from './style'
import savegame from '../../providers/savegame'

export default ({ navigation }) => {
    const dispatch = useDispatch()

    const init = async () => {
        await account.deleteAccount()
        Promise.all([account.getAccount(), savegame.getProgress()]).then(res => {
            const [account, progress] = res
            if (account) {
                dispatch(setAccount(account))
                dispatch(setProgress(progress))
                navigation.replace('home')
            } else {
                navigation.replace('onboarding')
            }
        })
    }
    useEffect(() => {
        init()
    }, [])
    return (
        <View style={styles.container}>
            <Text>Splash Screen</Text>
            <ActivityIndicator size="small" color="#0000ff" />
        </View>
    )
}