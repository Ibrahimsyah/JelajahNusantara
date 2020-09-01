import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default ({children}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textLine} />
            <Text style={styles.textStyle}>{children}</Text>
        </View>
    )
}