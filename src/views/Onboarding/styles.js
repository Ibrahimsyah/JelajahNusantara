import { StyleSheet, StatusBar } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight,
        flex: 1
    },
    btnAction: {
        backgroundColor: '#6C9EBF',
        marginHorizontal: 32,
        marginVertical: 16,
        borderRadius: 30,
        padding: 8,
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 12,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    fragmentContainer: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 32
    },
    image: {
        width: '100%',
        maxHeight: 300,
        resizeMode: 'contain'
    },
    title: {
        marginTop: 8,
        color: '#6C9EBF',
        fontWeight: 'bold',
        fontSize: 20
    },
    subtitle: {
        textAlign: 'center'
    }
})