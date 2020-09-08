import React, { useState, useEffect } from 'react'
import { Image, TouchableOpacity, Text, View } from 'react-native'
import MainBackground from '../../components/MainBackground'
import TopNavigation from '../../components/TopNavigation'
import styles from './styles'

import api from '../../providers/api'

const owlBook = require('../../assets/images/owlBook.png')

const NumberedList = ({ number, children }) => {
    return (
        <View style={styles.numberedListContainer}>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 18 }}>{number}.</Text>
            <Text style={{ flex: 11, fontSize: 18 }}>{children}</Text>
        </View>
    )
}
export default ({ navigation, route }) => {
    const [loading, setLoading] = useState(true)
    const [storyData, setStory] = useState(null)
    const { storyId } = route.params

    const onMulaiBaca = () => {
        if (!loading) {
            navigation.navigate('ruang-baca', {
                story: storyData.steps,
                quiz: storyData.quiz
            })
        }
    }

    const fetchStory = async () => {
        const res = await api.request(`story/${storyId}`, 'get')
        return res
    }


    useEffect(() => {
        fetchStory().then(res => {
            setStory(res)
            setLoading(false)
        })
    })
    return (
        <>
            <TopNavigation navigation={navigation} />
            <MainBackground>
                <Text style={styles.heading} numberOfLines={1} adjustsFontSizeToFit>Petunjuk Membaca</Text>
                <View style={{ height: 300 }}>
                    <Image source={owlBook} style={styles.owlImage} />
                </View>
                <NumberedList number="1">Baca atau dengarkan cerita dengan seksama</NumberedList>
                <NumberedList number="2">Dapatkan bintang dengan menyelesaikan satu cerita rakyat</NumberedList>
                <NumberedList number="3">Dapatkan bintang dengan menjawab setiap kuis yang diberikan</NumberedList>
                <NumberedList number="4">Selalu ingat jangan membaca dalam kegelapan</NumberedList>
                <TouchableOpacity style={styles.btnAction} onPress={onMulaiBaca}>
                    <Text style={styles.btnText}>{loading ? 'Memuat Cerita...' : 'Mulai Membaca'}</Text>
                </TouchableOpacity>
            </MainBackground>
        </>
    )
}