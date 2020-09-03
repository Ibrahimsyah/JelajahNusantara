import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    card: {
        marginTop: 16,
        display: 'flex',
        flexDirection: "row",
        padding: 16,
        backgroundColor: '#6C9EBF',
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    leftContainer: {
        flex: 0.6, justifyContent: 'space-around'
    },
    owlIcon: {
        width: '100%',
        resizeMode: 'contain'
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
    },
    btnLanjut: {
        padding: 4,
        backgroundColor: '#AFD4E6',
        borderRadius: 16,
        alignItems: 'center'
    }
})