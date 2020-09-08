import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    wrapper: {
        zIndex: 99,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    modalContainer: {
        margin: 50,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        paddingBottom: 50,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subtitle: {
        textAlign: 'center'
    },
    btnAction: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 5,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        zIndex: 99
    }
})