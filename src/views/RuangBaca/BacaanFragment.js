import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import styles from './styles'

const backgroundImage = require('../../assets/backgrounds/BgRuangBaca.png')
const iconBack = require('../../assets/icons/carousel_prev.png')
const iconNext = require('../../assets/icons/carousel_next.png')

const PageNumber = ({ page }) => {
    return (
        <View style={{ display: 'flex', alignItems: 'center' }}>
            <Text style={styles.pageNumber}>{page}</Text>
        </View >
    )
}

export default (props) => {
    const { onNext, onBack, content, image, page } = props

    return (
        <View style={{ flex: 1 }}>
            <Image source={backgroundImage} style={styles.headerImage} />
            <View style={styles.container}>
                <View style={{ height: '50%' }}>
                    <PageNumber page={page} />
                    <View style={styles.topContainer}>
                        <TouchableOpacity style={{ flex: 0.1 }} onPress={onBack}>
                            <Image source={iconBack} />
                        </TouchableOpacity>
                        <Text style={{ flex: 0.8, textAlign: 'center' }}>
                            {content}
                        </Text>
                        <TouchableOpacity style={{ flex: 0.1 }} onPress={onNext}>
                            <Image source={iconNext} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: '50%' }}>
                    <Image source={image} style={styles.storyImage} />
                </View>
            </View>
        </View>
    )
}