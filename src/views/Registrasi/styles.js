import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16
    },
    background: {
        width: '100%',
        maxHeight: 200,
        resizeMode: 'contain'
    },
    heading: {
        marginTop: 8,
        color: '#6C9EBF',
        fontWeight: 'bold',
        fontSize: 30
    },
    textInput: {
        padding: 8,
        paddingHorizontal: 16,
        marginVertical: 8,
        backgroundColor: '#DBECF4',
        borderRadius: 50,
        width: '80%'
    },
    btnAction: {
        backgroundColor: "#6C9EBF",
        padding: 8,
        paddingHorizontal: 16,
        marginVertical: 8,
        borderRadius: 50,
        width: '80%'
    },
    btnText: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign:'center'
    }
})