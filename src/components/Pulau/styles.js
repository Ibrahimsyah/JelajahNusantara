import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    card: {
        marginVertical: 8,
        display:'flex',
        flexDirection:"row",
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
        fontSize: 18,
    },
    btnLanjut: {
        marginTop:8,
        padding: 8,
        backgroundColor: '#AFD4E6',
        borderRadius: 16,
        alignItems:'center'
    }
})