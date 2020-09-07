import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#FFA100',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 16,
        padding: 8,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    thumbnail: {
        flex: 0.4,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 16
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        marginLeft: 16
    },
    contentTitle: {
        margin: 0,
        fontWeight: 'bold',
        fontSize: 18
    },
    contentDescription: {
        margin: 0,
        fontSize: 12,
        color: '#fff',
        fontWeight: '500'
    },
    btnAction: {
        backgroundColor: '#fff',
        alignSelf: 'flex-end',
        borderBottomLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        padding: 8,
        marginTop: 8
    },
    btnText: {
        fontSize: 9
    }
})