import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    badgeCard: {
        display: "flex",
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    starCount: {
        color: '#F9941D',
        fontWeight: 'bold',
    }
})