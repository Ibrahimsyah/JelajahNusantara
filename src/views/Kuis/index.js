import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import TopNavigation from '../../components/TopNavigation'
import ScoreBadge from '../../components/ScoreBadge'
import styles from './styles'
import config from './index.config'

const backgroundImage = require('../../assets/backgrounds/bgKuis.png')

const CardAnswer = ({ order, answer }) => {
    const cardConfig = config.cardAnswer[order]
    return (
        <TouchableOpacity style={styles.btnAnswer}>
            <Image source={cardConfig.icon} style={styles.iconAnswer} />
            <Text style={{ ...styles.answer, color: cardConfig.color }} numberOfLines={2} adjustsFontSizeToFit>{answer}</Text>
        </TouchableOpacity >
    )
}
export default (props) => {
    const { navigation } = props
    return (
        <>
            <Image style={styles.backgroundImage} source={backgroundImage} />
            <TopNavigation navigation={navigation} useBackArrow={false} />
            <View style={styles.container}>
                <ScoreBadge />
                <Text style={styles.question} numberOfLines={5} adjustsFontSizeToFit>
                    Hello World Hello World Hello World Hello World Hello World Hello World
                    Hello World Hello World Hello World Hello World Hello World Hello World
                </Text>
                <CardAnswer order={0} answer="Teser" />
                <CardAnswer order={1} answer="Teser" />
                <CardAnswer order={2} answer="Teser" />
            </View>
        </>
    )
}