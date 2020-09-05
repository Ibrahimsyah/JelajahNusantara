import { StyleSheet, StatusBar } from 'react-native'

export default StyleSheet.create({
    pageNumber: {
        marginVertical: 8,
        padding: 8,
        backgroundColor: '#FFA100',
        borderRadius: 40,
        height: 40,
        width: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    headerImage: {
        width: '100%',
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        position: 'absolute',
        top: 50 + StatusBar.currentHeight,
        bottom: 0,
        left: 0,
        width: '100%',
        flex: 1
    },
    topContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    storyImage: {
        width: '100%',
        flex: 1,
        resizeMode: 'cover'
    }
})