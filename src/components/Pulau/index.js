import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default (props) => {
    const { nama, gambar } = props
    return (
        <View style={styles.card}>
            <View style={{ flex: 0.4, justifyContent: 'space-around', padding: 16 }}>
                <Text style={styles.title}>{nama}</Text>
                <TouchableOpacity style={styles.btnLanjut}>
                    <Text> Mulai Petualangan</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.6 }}>
                <Image source={gambar} style={{ width: '100%' }} />
            </View>
        </View>
    )
}