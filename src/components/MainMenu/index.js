import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const crownLogo = require('../../assets/icons/crown.png')
const badgeLogo = require('../../assets/icons/badge-lg.png')
const helpLogo = require('../../assets/icons/help.png')
const rankLogo = require('../../assets/icons/rank.png')

const Card = props => {
    return (
        <View style={styles.card}>
            <Image source={props.image} style={styles.menuLogo}/>
            <Text>{props.title}</Text>
        </View>
    )
}

export default () => {
    return (
        <View style={styles.container}>
            <Card image={crownLogo} title="Profil"/>
            <Card image={badgeLogo} title="Bintang"/>
            <Card image={rankLogo} title="Rangking"/>
            <Card image={helpLogo} title="Bantuan"/>
        </View>
    )
}