import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'

const badgeIcon = require('../../assets/icons/badge.png')

export default () => {
    return (
        <View style={styles.badgeCard}>
            <Text style={styles.starCount}>Bintang : 100</Text>
            <Image source={badgeIcon} />
        </View>
    )
}