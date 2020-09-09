import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    wrapper: {
        zIndex: 99,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    modalContainer: {
        marginHorizontal: '10%',
        marginVertical: '30%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        paddingBottom: 50,
        alignItems: "center",
    },
    title: {
        color: '#219653',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subtitle: {
        textAlign: 'center'
    },
    btnAction: {
        backgroundColor: '#219653',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 5,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        zIndex: 99
    },
    mainContainer: { display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center', marginTop: 20 },
    carouselButton: { width: '100%', height: '100%', flex: 1, zIndex: 99, display: 'flex', justifyContent: 'center', alignItems: 'center' },
    carouselBody: { flex: 1, width: '100%', justifyContent: 'space-around', alignItems: 'center' },
    contentImage: { width: 100, height: 100, resizeMode: 'cover' },

})