import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'

const badgeIcon = require('../../assets/icons/badge.png')
export default (props) => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <View style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFA100',
                width: 50,
                height: 50,
                borderRadius: 50,
                zIndex: 2
            }}>
                <Image source={badgeIcon} />
                <Text>100</Text>
            </View>
            <View style={{
                backgroundColor: '#FFA100',
                padding: 8,
                zIndex: 1,
                borderRadius: 16,
                marginLeft: -30,
                paddingLeft: 40
            }}>
                <Text style={{
                    color: '#fff',
                    fontWeight: 'bold'
                }}>Kuis Padanan Kata</Text>
            </View>
        </View>
    )
}