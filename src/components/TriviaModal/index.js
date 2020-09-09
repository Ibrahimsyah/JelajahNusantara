import React, { useRef } from 'react'
import { Modal, View, Text, Image, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-looped-carousel'
import config from './index.config'
import styles from './styles'

const backArrow = require('../../assets/icons/carousel_prev.png')
const nextArrow = require('../../assets/icons/carousel_next.png')
export default ({ data = [], visible, onPress }) => {
    let _carousel = useRef(null)
    return (
        <Modal
            animationType="fade"
            transparent
            visible={visible}>
            <View style={styles.wrapper}>
                <View style={styles.modalContainer}>
                    <Text style={{ ...styles.title }}>TAHUKAH KAMU?</Text>
                    <View style={styles.mainContainer}>
                        <TouchableOpacity style={styles.carouselButton} onPress={() => _carousel._animatePreviousPage()}>
                            <Image source={backArrow} style={{ marginTop: -50 }} />
                        </TouchableOpacity>
                        {data.length > 0 && <Carousel {...config.carousel} ref={el => _carousel = el}>
                            {data.map(trivia => (
                                <View key={trivia._id} style={{ ...config.carousel.style, ...styles.carouselBody }}>
                                    <Image source={{ uri: trivia.imgSrc }} style={styles.contentImage} />
                                    <Text style={{ fontSize: 12, textAlign: 'center' }} >{trivia.content}</Text>
                                </View>
                            ))}
                        </Carousel>}
                        <TouchableOpacity style={styles.carouselButton} onPress={() => _carousel._animateNextPage()}>
                            <Image source={nextArrow} style={{ marginTop: -50 }} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ ...styles.btnAction }} onPress={onPress}>
                        <Text style={{ textAlign: 'center', color: '#fff' }}>Tutup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal >
    )
}