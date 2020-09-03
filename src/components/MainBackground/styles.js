import { StyleSheet, StatusBar } from 'react-native'
export default StyleSheet.create({
    container: {
        minHeight: '100%',
        flex:1,
        paddingTop: StatusBar.currentHeight + 50,
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