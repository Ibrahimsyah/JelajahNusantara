import React, { useRef, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-looped-carousel'
import styles from './styles'
import config from './index.config'

const OnboardingFragment = ({ index }) => {
    const screen = config.screen[index]
    return (
        <View style={{ ...config.carousel.style, ...styles.fragmentContainer }}>
            <Image source={screen.image} style={styles.image} />
            <Text style={styles.title}>{screen.title}</Text>
            <Text style={styles.subtitle}>{screen.subtitle}</Text>
        </View>
    )
}
export default ({ navigation }) => {
    const [currentIndex, setIndex] = useState(0)
    let _carousel = useRef(null)
    const pressHandler = () => {
        if (currentIndex == 2) {
            navigation.replace('registrasi')
        } else {
            setTimeout(() => {
                _carousel._animateNextPage()
                setIndex(idx => (idx + 1))
            }, 50)

        }
    }
    return (
        <View style={styles.container}>
            <Carousel ref={el => _carousel = el} {...config.carousel}>
                <OnboardingFragment index={0} />
                <OnboardingFragment index={1} />
                <OnboardingFragment index={2} />
            </Carousel>
            <TouchableOpacity style={styles.btnAction} onPress={pressHandler}>
                <Text style={styles.btnText}>Mulai Petualangan</Text>
            </TouchableOpacity>
        </View>
    )
}