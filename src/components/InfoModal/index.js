import React from 'react'
import { Modal, View, Text, Image, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-looped-carousel'
import config from './index.config'
import styles from './styles'

export default ({ type = 'salah', visible, onPress }) => {
    return (
        <Modal
            animationType="fade"
            transparent
            visible={visible}>
            <View style={styles.wrapper}>
                <View style={styles.modalContainer}>
                    <Text style={{ ...styles.title, color: config.profile[type].color }}>{config.profile[type].title}</Text>
                    <Text style={styles.subtitle}>{config.profile[type].subtitle}</Text>
                    <Image source={config.profile[type].picture} style={{ width: 250, height: 250, resizeMode: 'contain' }} />
                    <TouchableOpacity style={{ ...styles.btnAction, backgroundColor: config.profile[type].color, }} onPress={onPress}>
                        <Text style={{ textAlign: 'center', color: '#fff' }}>{config.profile[type].action}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal >
    )
}