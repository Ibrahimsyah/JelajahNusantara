import AsyncStorage from '@react-native-community/async-storage'

const KEY = 'ACCOUNT'

export default {
    deleteAccount: async () => {
        console.log('masuk')
        await AsyncStorage.removeItem(KEY)
    },
    getAccount: async () => {
        const res = await AsyncStorage.getItem(KEY)
        const data = JSON.parse(res)
        return data
    },
    saveAccount: async (account) => {
        const data = JSON.stringify(account)
        await AsyncStorage.setItem(KEY, data)
    }
}