import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    numberedListContainer: { display: 'flex', flexDirection: 'row' },
    heading: { textAlign: 'center', fontSize: 36, color: '#FFA100' },
    owlImage: { height: '100%', width: '100%', alignSelf: 'center', resizeMode: 'contain' },
    btnAction: { marginVertical: 20, flex: 1, backgroundColor: '#FFA100', padding: 8, borderRadius: 16 },
    btnText: { textAlign: "center", fontWeight: 'bold' }
})