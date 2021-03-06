import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    card: {
        marginVertical: 8,
        display: 'flex',
        flexDirection: "row",
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
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    btnLanjut: {
        marginTop: 8,
        padding: 4,
        backgroundColor: '#fff',
        borderRadius: 16,
        alignItems: 'center'
    },
    pulauPriceContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 8,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 16,
        borderTopRightRadius: 16,
        display: 'flex',
        flexDirection: 'row'
    },
    pulauPrice: {
        color: '#F9941D',
        fontWeight: 'bold',
    },
    text: {
        color: '#6C9EBF',
        fontWeight:'bold'
    },
    textDisabled: {
        color: '#c9c9c9',
        fontWeight:'bold'
    }
})