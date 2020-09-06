import { StyleSheet, StatusBar } from 'react-native'

export default StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        width: '100%',
        height: '100%'
    },
    question: {
        marginTop: 16,
        fontSize: 20
    },
    container: {
        paddingHorizontal: 20,
        flex: 1,
        paddingTop: StatusBar.currentHeight + 50
    },
    btnAnswer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 30,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    iconAnswer: {
        width: 40,
        height: 40
    },
    answer: {
        marginLeft: 16,
        fontWeight: 'bold',
        fontSize: 18,
    }
})