import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    card: {
        marginTop: 16,
        display:'flex',
        flexDirection:"row",
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
    title:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 26
    },
    btnLanjut: {
        padding: 8,
        backgroundColor: '#AFD4E6',
        borderRadius: 16
    }
})