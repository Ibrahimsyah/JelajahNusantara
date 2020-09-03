import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import MainBackground from '../../components/MainBackground'
import TopNavigation from '../../components/TopNavigation'
import HeadingText from '../../components/HeadingText'
import styles from './styles'
import config from './index.config'

export default ({ route, navigation }) => {
    const { idPulau } = route.params || {
        idPulau: 1
    }
    const pulau = config.pulau.find(p => p.id === idPulau)
    console.log(pulau)
    return (
        <>
            <TopNavigation navigation={navigation} />
            <MainBackground>
                <View style={styles.hero}>
                    <Image source={pulau.gambar} style={styles.pulauImage} />
                    <Text numberOfLines={3} style={styles.pulauName} adjustsFontSizeToFit>{pulau.nama}</Text>
                </View>
                <HeadingText color="#F9941D">KOLEKSI CERITA RAKYAT</HeadingText>
            </MainBackground></>
    )
}