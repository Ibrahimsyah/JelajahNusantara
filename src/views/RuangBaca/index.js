import React, { useRef } from 'react'
import { View } from 'react-native'
import Carousel from 'react-native-looped-carousel';
import TopNavigation from '../../components/TopNavigation'
import config from './index.config'

import BacaanFragment from './BacaanFragment'

const imageCerita = require('../../assets/backgrounds/ImageCerita.png')

export default ({ navigation }) => {
    let _carousel = useRef(null)

    const onBack = () => _carousel._animatePreviousPage()
    const onNext = () => _carousel._animateNextPage()
    return (
        <>
            <TopNavigation navigation={navigation} useBackArrow={false} />
            <View>
                <Carousel ref={el => _carousel = el} {...config.carousel}>
                    <BacaanFragment onNext={onNext} onBack={onBack} page={1} content="test 0" image={imageCerita} hideBackButton/>
                    <BacaanFragment onNext={onNext} onBack={onBack} page={2} content="test 1" image={imageCerita} />
                    <BacaanFragment onNext={onNext} onBack={onBack} page={3} content="test 2" image={imageCerita} hideNextButton/>
                </Carousel>
            </View>
        </>
    )
}