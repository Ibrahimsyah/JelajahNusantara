import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
const OwlIcon = require('../../assets/icons/owl.png')
export default () => {
    return (
        <View style={styles.card}>
            <View style={{ flex: 0.5, justifyContent:'space-around'}}>
                <Text style={styles.title}>Ayuk Keliling Indonesia</Text>
                <TouchableOpacity style={styles.btnLanjut}>
                    <Text> Lanjutkan Petualangan</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.5 }}>
                <Image source={OwlIcon} />
            </View>
        </View>
    )
}