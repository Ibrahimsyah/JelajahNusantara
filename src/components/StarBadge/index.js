import React from 'react'
import { View, Image, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'

const badgeIcon = require('../../assets/icons/badge.png')

const App = (props) => {
    const { savegame } = props
    return (
        <View style={styles.badgeCard}>
            <Text style={styles.starCount}>Bintang : {savegame.score}</Text>
            <Image source={badgeIcon} />
        </View>
    )
}

const mapStateToProps = state => {
    return ({
        savegame : state.savegame
    })
}

export default connect(mapStateToProps)(App)