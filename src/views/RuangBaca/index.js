import React, { useRef } from 'react'
import { Image, StatusBar, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-looped-carousel';
import TopNavigation from '../../components/TopNavigation'
import styles from './styles'

const { width, height } = Dimensions.get('window');

const backgroundImage = require('../../assets/backgrounds/BgRuangBaca.png')
const imageCerita = require('../../assets/backgrounds/ImageCerita.png')
const iconBack = require('../../assets/icons/carousel_prev.png')
const iconNext = require('../../assets/icons/carousel_next.png')
const PageNumber = ({ page }) => {
    return (
        <View style={{ display: 'flex', alignItems: 'center' }}>
            <Text style={{ marginVertical: 8, padding: 8, backgroundColor: '#FFA100', borderRadius: 40, height: 40, width: 40, textAlign: 'center', textAlignVertical: 'center', fontSize: 20, fontWeight: 'bold' }}>{page}</Text>
        </View >
    )
}
export default ({ navigation }) => {
    let _carousel = useRef(null)
    return (
        <>
            <TopNavigation navigation={navigation} />
            <View>
                <Carousel
                    ref={el => _carousel = el}
                    style={{ width, height }}
                    autoplay={false}
                    isLooped={false}
                    swipe={false}
                >
                    <View style={{ flex: 1 }}>
                        <Image source={backgroundImage} style={{ width: '100%', flex: 1, resizeMode: 'cover', }} />
                        <View style={{ position: 'absolute', top: 50 + StatusBar.currentHeight, bottom: 0, left: 0, width: '100%', flex: 1 }}>
                            <View style={{ height: '50%', }}>
                                <PageNumber page={1} />
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ flex: 0.1 }} onPress={() => _carousel._animatePreviousPage()}>
                                        <Image source={iconBack} />
                                    </TouchableOpacity>
                                    <Text style={{ flex: 0.8, textAlign: 'center' }}>
                                        Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a
                                        Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a B
                                la a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a Bla a </Text>
                                    <TouchableOpacity style={{ flex: 0.1 }} onPress={() => _carousel._animateNextPage()}>
                                        <Image source={iconNext} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ height: '50%' }}>
                                <Image source={imageCerita} style={{ width: '100%', flex: 1, resizeMode: 'cover' }} />
                            </View>
                        </View>
                    </View>
                </Carousel>
            </View>
        </>
    )
}