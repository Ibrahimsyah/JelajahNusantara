import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import TopNavigation from '../../components/TopNavigation'
import ScoreBadge from '../../components/ScoreBadge'
import InfoModal from '../../components/InfoModal'
import { useDispatch } from 'react-redux'
import { setProgress } from '../../store/savegame.action'
import styles from './styles'
import config from './index.config'

const backgroundImage = require('../../assets/backgrounds/bgKuis.png')

const CardAnswer = ({ order, answer, onPress }) => {
    const cardConfig = config.cardAnswer[order]
    return (
        <TouchableOpacity style={styles.btnAnswer} onPress={onPress}>
            <Image source={cardConfig.icon} style={styles.iconAnswer} />
            <Text style={{ ...styles.answer, color: cardConfig.color }} numberOfLines={2} adjustsFontSizeToFit>{answer}</Text>
        </TouchableOpacity >
    )
}
const App = ({ navigation, route, savegame }) => {
    const [modal, setModal] = useState({
        visible: false,
        type: 'salah',
    })
    const dispatch = useDispatch()
    const { quiz } = route.params

    const handleActionModal = (valid) => {
        if (valid) {
            dispatch(setProgress({ ...savegame, score: savegame.score + 100 }))
        }
        setModal({ ...modal, visible: false })
        navigation.goBack()
    }
    const handleClick = (id) => {
        const valid = id === quiz.correctAnswerId
        setModal({
            ...modal,
            visible: true,
            type: valid ? 'benar' : 'salah',
            onPress: () => handleActionModal(valid)
        })

    }
    return (
        <>
            <Image style={styles.backgroundImage} source={backgroundImage} />
            <TopNavigation navigation={navigation} useBackArrow={false} />
            <View style={styles.container}>
                <InfoModal type={modal.type} visible={modal.visible} onPress={modal.onPress} />
                <ScoreBadge />
                <Text style={styles.question} numberOfLines={5} adjustsFontSizeToFit>
                    {quiz.question}
                </Text>
                <CardAnswer order={0} answer={quiz.answers[0].answer} onPress={() => handleClick(quiz.answers[0].id)} />
                <CardAnswer order={1} answer={quiz.answers[1].answer} onPress={() => handleClick(quiz.answers[1].id)} />
                <CardAnswer order={2} answer={quiz.answers[2].answer} onPress={() => handleClick(quiz.answers[2].id)} />
            </View>
        </>
    )
}

const mapStateToProps = state => {
    return {
        savegame: state.savegame
    }
}

export default connect(mapStateToProps)(App)