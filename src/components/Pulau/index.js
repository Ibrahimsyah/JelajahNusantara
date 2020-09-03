import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const badgeIcon = require('../../assets/icons/badge.png')

export default (props) => {
    const { nama, gambar, harga, onPress } = props
    return (
        <View style={styles.card}>
            <View style={{ flex: 0.4, justifyContent: 'space-around', padding: 16 }}>
                <Text style={styles.title}>{nama}</Text>
                <TouchableOpacity style={styles.btnLanjut} onPress={onPress}>
                    <Text numberOfLines={1} adjustsFontSizeToFit> Mulai Petualangan</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.6, justifyContent: "center", alignItems: "center" }}>
                <Image source={gambar} style={{ width: '100%', height: 100, resizeMode: 'contain' }} />
            </View>
            <View style={styles.pulauPriceContainer}>
                <Text style={styles.pulauPrice}>{harga === 0 ? "Gratis" : harga}</Text>
                <Image source={badgeIcon} />
            </View>
        </View>
    )
}