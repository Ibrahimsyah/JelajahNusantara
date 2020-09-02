import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import MainBackground from '../../components/MainBackground'
import TopNavigation from '../../components/TopNavigation'
import HeadingText from '../../components/HeadingText'
import styles from './styles'
export default ({ route, navigation }) => {
    const { pulau } = route.params || {
        pulau: {
            id: 1,
            nama: 'Pulau Sumatera',
            harga: 0,
            gambar: require('../../assets/pulau/sumatera-single.png')
        }
    }
    console.log(pulau)
    return (
        <>
            <TopNavigation />
            <MainBackground>
                <View style={styles.hero}>
                    <Image source={pulau.gambar} style={styles.pulauImage} />
                    <Text style={styles.pulauName}>{pulau.nama}</Text>
                </View>
                <HeadingText color="#F9941D">KOLEKSI CERITA RAKYAT</HeadingText>
            </MainBackground></>
    )
}