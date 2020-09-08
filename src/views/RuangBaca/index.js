import React, { useRef, useState } from 'react'
import { View } from 'react-native'
import Carousel from 'react-native-looped-carousel';
import TopNavigation from '../../components/TopNavigation'
import InfoModal from '../../components/InfoModal'
import config from './index.config'

import BacaanFragment from './BacaanFragment'

const imageCerita = require('../../assets/backgrounds/ImageCerita.png')

export default ({ navigation, route }) => {
    const { story, quiz } = route.params
    const [modal, setModal] = useState({
        visible: false,
        type: 'selesai',
    })

    const sectionCount = parseInt(story.length / quiz.length)
    let _carousel = useRef(null)

    const onBack = () => _carousel._animatePreviousPage()
    const onNext = (page) => {
        if (page + 1 === story.length) {
            setModal({ ...modal, visible: true , onPress: () => navigation.goBack()})
        } else {
            const isNeedQuiz = parseInt((page + 1) % sectionCount) === 0
            if (isNeedQuiz) {
                const quizIndex = parseInt((page + 1) / sectionCount) - 1
                navigation.navigate('kuis', {
                    quiz: quiz[quizIndex]
                })
            }
            _carousel._animateNextPage()
        }

    }
    return (
        <>
            <TopNavigation navigation={navigation} useBackArrow={false} />
            <View>
                <InfoModal type={modal.type} visible={modal.visible} onPress={modal.onPress} />
                <Carousel ref={el => _carousel = el} {...config.carousel}>
                    {story.map((s, idx) => {
                        if (idx == 0) {
                            return <BacaanFragment key={s._id} onNext={() => onNext(idx)} onBack={onBack} page={idx + 1} content={s.content} image={s.imgSrc} hideBackButton />
                        } else {
                            return <BacaanFragment key={s._id} onNext={() => onNext(idx)} onBack={onBack} page={idx + 1} content={s.content} image={s.imgSrc} />
                        }
                    })}
                </Carousel>
            </View>
        </>
    )
}