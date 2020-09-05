import { StyleSheet, StatusBar } from 'react-native'

export default StyleSheet.create({
    container: {
        marginBottom: -50 - StatusBar.currentHeight,
        height: 50,
        marginTop: StatusBar.currentHeight,
        padding: 8,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    actionIcon: {
        marginHorizontal: 2,
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})