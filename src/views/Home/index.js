import React, { useEffect, useState } from 'react';
import { View } from 'react-native'
import { connect } from 'react-redux'
import MainBackground from '../../components/MainBackground'
import StarBadge from '../../components/StarBadge'
import RecentPlay from '../../components/RecentPlay'
import MainMenu from '../../components/MainMenu'
import HeadingText from '../../components/HeadingText'
import Pulau from '../../components/Pulau'
import api from '../../providers/api'
import styles from './styles'
import config from './index.config'

const App =  ({ navigation, savegame }) => {
  const [pulau, setPulau] = useState(config.pulauList)
  const { ownedPulauId } = savegame
  const onPulauClick = (pulau) => {
    navigation.navigate('detail-pulau', {
      idPulau: pulau.id
    })
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
