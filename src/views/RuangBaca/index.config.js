import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

export default {
    carousel: {
        style: { width, height },
        autoplay: false,
        isLooped: false,
        swipe: false
    }
}