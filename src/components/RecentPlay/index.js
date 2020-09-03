import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
const OwlIcon = require('../../assets/icons/owl.png')
export default () => {
    return (
        <View style={styles.card}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>Ayuk Keliling Indonesia</Text>
                <View>
                    <TouchableOpacity style={styles.btnLanjut}>
                        <Text numberOfLines={2}>Lanjut Petualangan</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 0.4 }}>
                <Image style={styles.owlIcon} source={OwlIcon} />
            </View>
        </View>
    )
}