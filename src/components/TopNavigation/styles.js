import { StyleSheet, StatusBar } from 'react-native'

export default StyleSheet.create({
    container: {
        marginBottom: -50 - StatusBar.currentHeight,
        height: 50,
        marginTop: StatusBar.currentHeight,
        padding:8,
        display: "flex",
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between'
    }
})