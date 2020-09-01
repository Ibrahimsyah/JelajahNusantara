import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    card: {
        flex: 0.20,
        display:'flex',
        alignItems:'center',
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    menuLogo: {
        height: 50,
        width: 50,
        resizeMode: 'contain'
    },
    container: {
        marginTop: 16,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    }
})