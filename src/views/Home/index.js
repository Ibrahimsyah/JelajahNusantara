import React, { useEffect, useState } from 'react';
import { View } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { setProgress } from '../../store/savegame.action'
import MainBackground from '../../components/MainBackground'
import StarBadge from '../../components/StarBadge'
import RecentPlay from '../../components/RecentPlay'
import MainMenu from '../../components/MainMenu'
import HeadingText from '../../components/HeadingText'
import Pulau from '../../components/Pulau'
import InfoModal from '../../components/InfoModal'

import api from '../../providers/api'
import styles from './styles'
import config from './index.config'

const App = ({ navigation, savegame }) => {
  const [pulau, setPulau] = useState(config.pulauList)
  const [modal, setModal] = useState({
    visible: false,
    type: 'selesai',
  })
  const dispatch = useDispatch()
  const { ownedPulauId } = savegame

  const onModalActionClick = (isBuy, pulau = {}) => {
    if (isBuy) {
      dispatch(setProgress({
        ownedPulauId: [...savegame.ownedPulauId, pulau.id],
        score: savegame.score - pulau.harga
      }))
      setModal({ ...modal, visible: false })
    } else {
      setModal({ ...modal, visible: false })
    }
  }
  const onPulauClick = (pulau) => {
    if (ownedPulauId.includes(pulau.id)) {
      navigation.navigate('detail-pulau', {
        idPulau: pulau.id
      })
    } else {
      const { score } = savegame
      if (score >= pulau.harga) {
        setModal({
          visible: true,
          type: 'beli',
          onPress: () => onModalActionClick(true, pulau)
        })
      } else {
        setModal({
          visible: true,
          type: 'gagalBeli',
          onPress: () => onModalActionClick(false)
        })
      }
    }
  }

  const fetchPulau = async () => {
    const res = await api.request('home', 'get')
    return res
  }
  useEffect(() => {
    Promise.all([fetchPulau()]).then(res => {
      const length = res[0].length
      setPulau(config.pulauList.slice(0, length))
    })
  }, [])
  return (
    <MainBackground style={{ paddingTop: 40 }}>
      <InfoModal type={modal.type} visible={modal.visible} onPress={modal.onPress} />
      <View style={styles.container}>
        <StarBadge />
      </View>
      <RecentPlay />
      <MainMenu />
      <HeadingText color="#6C9EBF">KOLEKSI PULAU</HeadingText>
      {pulau.map(pulau => <Pulau key={pulau.id} {...pulau} onPress={() => onPulauClick(pulau)} disabled={!ownedPulauId.includes(pulau.id)} />)}
    </MainBackground>
  );
};

const mapStateToProps = state => {
  return ({
    savegame: state.savegame
  })
}

export default connect(mapStateToProps)(App)
