import React, { useRef } from 'react'
import { View } from 'react-native'
import Carousel from 'react-native-looped-carousel';
import TopNavigation from '../../components/TopNavigation'
import config from './index.config'

import BacaanFragment from './BacaanFragment'

const imageCerita = require('../../assets/backgrounds/ImageCerita.png')

export default ({ navigation, route }) => {
    const { story, quiz } = route.params
    console.log(story.length)
    console.log(quiz.length)
    let _carousel = useRef(null)

    const onBack = () => _carousel._animatePreviousPage()
    const onNext = () => _carousel._animateNextPage()
    return (
        <>
            <TopNavigation navigation={navigation} useBackArrow={false} />
            <View>
                <Carousel ref={el => _carousel = el} {...config.carousel}>
                    {story.map((s, idx) => {
                        if (idx == 0) {
                            return <BacaanFragment key={s._id} onNext={onNext} onBack={onBack} page={idx + 1} content={s.content} image={s.imgSrc} hideBackButton />
                        } else {
                            return <BacaanFragment key={s._id} onNext={onNext} onBack={onBack} page={idx + 1} content={s.content} image={s.imgSrc}/>
                        }
                    })}
                </Carousel>
            </View>
        </>
    )
}