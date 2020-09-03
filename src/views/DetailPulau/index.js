import React from 'react'
import { Text, View, Image } from 'react-native'
import MainBackground from '../../components/MainBackground'
import TopNavigation from '../../components/TopNavigation'
import HeadingText from '../../components/HeadingText'
import FABSearch from '../../components/FABSearch'
import CeritaRakyatCard from '../../components/CeritaRakyatCard'

import styles from './styles'
import config from './index.config'

const thumbnailCeritaRakyat = require('../../assets/ceryat/ceryat1.png')

export default ({ route, navigation }) => {
    const { idPulau } = route.params || {
        idPulau: 1
    }
    const pulau = config.pulau.find(p => p.id === idPulau)
    return (
        <>
            <TopNavigation navigation={navigation} />
            <MainBackground>
                <View style={styles.hero}>
                    <Image source={pulau.gambar} style={styles.pulauImage} />
                    <Text numberOfLines={3} style={styles.pulauName} adjustsFontSizeToFit>{pulau.nama}</Text>
                </View>
                <HeadingText color="#F9941D">KOLEKSI CERITA RAKYAT</HeadingText>
                <CeritaRakyatCard thumbnail={thumbnailCeritaRakyat} title="Atu Belah Atu Bertangkup" description="Cerita Rakyat Dari Provinsi Nangroe Aceh Dasusalam" />
                <CeritaRakyatCard thumbnail={thumbnailCeritaRakyat} title="Hikayat Putri Hijau" description="Cerita Rakyat Dari Provinsi Sumatera Utara" />
            </MainBackground>
            <FABSearch onPress={() => console.log('masuk')} />
        </>
    )
}