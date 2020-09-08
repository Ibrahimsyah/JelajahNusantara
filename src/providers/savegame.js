import AsyncStorage from '@react-native-community/async-storage'

const KEY = "savegame"

export default {
    saveProgress: async (payload) => {
        const json = JSON.stringify(payload)
        await AsyncStorage.setItem(KEY, json)
    },
    getProgress: async () => {
        const res = await AsyncStorage.getItem(KEY)
        const data = JSON.parse(res)
        return data
    },
    
}