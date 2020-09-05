import React from 'react'
import { ScrollView, View, Image } from 'react-native'
import styles from './styles'

export default ({ children, style, onLayout }) => {
    const topVector = require('../../assets/backgrounds/top_overlay.png')
    const bottomVector = require('../../assets/backgrounds/bottom_overlay.png')
    return (
        <View style={{...styles.container, ...style}} onLayout={onLayout}>
            <Image source={topVector} style={styles.topOverlay}/>
            <Image source={bottomVector} style={styles.bottomOverlay}/>
            <ScrollView style={{paddingHorizontal:16}}>{children}</ScrollView>
        </View>
    )
}