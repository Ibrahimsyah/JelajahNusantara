import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default ({ children, color }) => {
    return (
        <View style={styles.container}>
            <View style={{ ...styles.textLine, backgroundColor: color }} />
            <Text style={{ ...styles.textStyle, color: color }}>{children}</Text>
        </View>
    )
}