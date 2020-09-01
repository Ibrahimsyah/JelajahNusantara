import React from 'react'
import { View, Image } from 'react-native'
import styles from './styles'

export default ({ children }) => {
    const topVector = require('../../assets/backgrounds/top_overlay.png')
    const bottomVector = require('../../assets/backgrounds/bottom_overlay.png')
    return (
        <View style={styles.container}>
            <Image source={topVector} style={styles.topOverlay}/>
            <Image source={bottomVector} style={styles.bottomOverlay}/>
            {children}
        </View>
    )
}