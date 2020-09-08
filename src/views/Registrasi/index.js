import React, { useState } from 'react'
import { TextInput, Text, Image, TouchableOpacity, KeyboardAvoidingView, View, Alert, ActivityIndicator } from 'react-native'
import { useDispatch } from 'react-redux'
import { setAccount } from '../../store/account.action'
import { setProgress } from '../../store/savegame.action'
import api from '../../providers/api'
import styles from './styles'
import config from './index.config'
const background = require('../../assets/backgrounds/bgRegistrasi.png')

export default ({ navigation }) => {
    const [state, setState] = useState(config.state)
    const dispatch = useDispatch()
    const handleRegister = async () => {
        const account = {
            name: state.name,
            username: state.username
        }
        if (state.name.length == 0 || state.username.length == 0) {
            Alert.alert('Error', 'Nama Lengkap atau Nama Pengguna Tidak Boleh Kosong!',
                [
                    { text: "OK", onPress: () => { } }
                ],
                { cancelable: false })
            return
        }
        try {
            setState(state => ({ ...state, loading: true }))
            const model = {
                fullName: state.name,
                username: state.username
            }
            const res = await api.request('auth/register', 'post', model)
            account.accessToken = res.token
            dispatch(setAccount(account))
            dispatch(setProgress({
                ownedPulauId: [1],
                score: 0,
            }))
            navigation.replace('home')
        } catch (err) {
            console.log('err:', err)
        }
    }

    const nameChange = text => setState(state => ({ ...state, name: text }))
    const userNameChange = text => setState(state => ({ ...state, username: text }))
    return (
        <View style={styles.container}>
            <Image source={background} style={styles.background} />
            <Text style={styles.heading}>SELAMAT DATANG</Text>
            <Text>Hai, yuk daftarkan dirimu</Text>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{ width: '100%', alignItems: 'center' }}>
                <TextInput style={styles.textInput}
                    placeholderTextColor="#6C9EBF"
                    onChangeText={nameChange}
                    placeholder="Nama Lengkap" />
                <TextInput style={styles.textInput}
                    placeholderTextColor="#6C9EBF"
                    onChangeText={userNameChange}
                    placeholder="Nama Pengguna" />
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.btnAction} onPress={handleRegister}>
                <Text style={styles.btnText}>Daftar</Text>
            </TouchableOpacity>
            {state.loading && <ActivityIndicator size='small' color="#6C9EBF" />}
        </View>
    )
}