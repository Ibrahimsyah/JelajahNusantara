import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styles from './styles'

const searchIcon = require('../../assets/icons/search.png')

export default ({onPress}) => {
    return(
        <TouchableOpacity style={styles.fab} onPress={onPress}>
            <Image style={styles.fabIcon} source={searchIcon}/>
        </TouchableOpacity>
    )
}