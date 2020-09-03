import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

const searchIcon = require('../../assets/icons/search.png')

export default (props) => {
    const { onPress, thumbnail, title, description } = props
    return (
        <View style={styles.container}>
            <Image source={thumbnail} style={styles.thumbnail} />
            <View style={styles.content}>
                <View>
                    <Text style={styles.contentTitle} numberOfLines={1} adjustsFontSizeToFit>{title}</Text>
                    <Text style={styles.contentDescription} numberOfLines={2} adjustsFontSizeToFit>{description}</Text>
                </View>
                <TouchableOpacity style={styles.btnAction} onPress={onPress}>
                    <Text style={styles.btnText}>Baca Cerita</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}