import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import StarBadge from '../StarBadge'
import styles from './styles'

const BackIcon = require('../../assets/icons/icon_back.png')

const helpIcon = require('../../assets/icons/ic_help.png')
const homeIcon = require('../../assets/icons/ic_home.png')
const restartIcon = require('../../assets/icons/ic_restart.png')
const volumeIcon = require('../../assets/icons/ic_sound.png')

export default ({ refs, navigation, useBackArrow = true, handler = {} }) => {
    return (
        <View style={styles.container} ref={refs}>
            {useBackArrow ?
                <TouchableOpacity onPress={() => navigation.goBack()}
                    style={{ zIndex: 99 }}>
                    <Image source={BackIcon} />
                </TouchableOpacity>
                :
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', zIndex: 99 }}>
                    <TouchableOpacity style={styles.actionIcon} onPress={() => console.log('go')}>
                        <Image source={helpIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionIcon} onPress={() => console.log('go')}>
                        <Image source={homeIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionIcon} onPress={() => console.log('go')}>
                        <Image source={restartIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionIcon} onPress={() => console.log('go')}>
                        <Image source={volumeIcon} />
                    </TouchableOpacity>
                </View>
            }
            <StarBadge />
        </View>
    )
}