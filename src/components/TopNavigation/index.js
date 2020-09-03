import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import StarBadge from '../StarBadge'
import styles from './styles'

const BackIcon = require('../../assets/icons/icon_back.png')

export default ({ refs, navigation }) => {
    return (
        <View style={styles.container} ref={refs}>
            <TouchableOpacity onPress={() => navigation.goBack()}
                style={{ zIndex: 99 }}>
                <Image source={BackIcon} />
            </TouchableOpacity>
            <StarBadge />
        </View>
    )
}