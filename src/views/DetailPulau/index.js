import React, { useState, useEffect } from 'react'
import { Text, View, Image } from 'react-native'
import MainBackground from '../../components/MainBackground'
import TopNavigation from '../../components/TopNavigation'
import HeadingText from '../../components/HeadingText'
import FABSearch from '../../components/FABSearch'
import CeritaRakyatCard from '../../components/CeritaRakyatCard'
import TriviaModal from '../../components/TriviaModal'
import api from '../../providers/api'
import styles from './styles'
import config from './index.config'

export default ({ route, navigation }) => {
    const { idPulau } = route.params
    const [pulau, _] = useState(config.pulau.find(p => p.id === idPulau))
    const [stories, setStories] = useState([])
    const [trivias, setTrivias] = useState([])
    const [modal, setModal] = useState({
        visible: false
    })

    const fetchDetailPulau = async (id) => {
        const res = await api.request(`home/detail/${id}`, 'get')
        return res
    }

    const onStoryClick = (id) => {
        navigation.navigate('aturan-main', {
            storyId: id
        })
    }

    const onTriviaButtonClick = () => {
        if (trivias.length > 0) {
            setModal({ visible: true })
        }
    }

    const modalAction = () => {
        setModal({ ...modal, visible: false })
    }
    useEffect(() => {
        Promise.all([fetchDetailPulau(idPulau)]).then(res => {
            const { detail: { trivias }, stories } = res[0]
            setTrivias(trivias)
            setStories(stories)
        })
    }, [])
    return (
        <>
            <TopNavigation navigation={navigation} />
            <TriviaModal visible={modal.visible} data={trivias} onPress={modalAction} />
            <MainBackground>
                <View style={styles.hero}>
                    <Image source={pulau.gambar} style={styles.pulauImage} />
                    <Text numberOfLines={3} style={styles.pulauName} adjustsFontSizeToFit>{pulau.nama}</Text>
                </View>
                <HeadingText color="#F9941D">KOLEKSI CERITA RAKYAT</HeadingText>
                {stories.map((story, idx) => (
                    <CeritaRakyatCard
                        key={story._id}
                        thumbnail={story.imgSrc}
                        title={story.title}
                        description={story.description}
                        onPress={() => onStoryClick(story._id)} />
                ))}
            </MainBackground>
            <FABSearch onPress={onTriviaButtonClick} />
        </>
    )
}