import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    fab: {
        width:50,
        height: 50,
        position: 'absolute',
        bottom: 20,
        right: 20,
        padding: 10,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    fabIcon:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    }
})