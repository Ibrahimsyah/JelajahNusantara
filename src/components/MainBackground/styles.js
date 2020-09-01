import { StyleSheet, StatusBar } from 'react-native'
export default StyleSheet.create({
    container: {
        height: '100%',
        padding: 16,
        paddingTop: StatusBar.currentHeight + 16,
    },
    topOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    bottomOverlay: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    }
})