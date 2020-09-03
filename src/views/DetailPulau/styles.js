import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    hero: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pulauImage: {
        flex: 0.6, width: '100%',
        resizeMode: 'contain'
    },
    pulauName: {
        flex: 0.4,
        color: '#F9941D',
        fontWeight: 'bold',
        fontSize: 25,
    }
})