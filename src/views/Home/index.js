import React from 'react';
import { View } from 'react-native'
import MainBackground from '../../components/MainBackground'
import StarBadge from '../../components/StarBadge'
import RecentPlay from '../../components/RecentPlay'
import MainMenu from '../../components/MainMenu'
import HeadingText from '../../components/HeadingText'
import Pulau from '../../components/Pulau'
import styles from './styles'
import config from './index.config'

export default ({ navigation }) => {

  const onPulauClick = (pulau) => {
    navigation.navigate('detail-pulau', {
      idPulau: pulau.id
    })
  }
  return (
    <MainBackground>
      <View style={styles.container}>
        <StarBadge />
      </View>
      <RecentPlay />
      <MainMenu />
      <HeadingText color="#6C9EBF">KOLEKSI PULAU</HeadingText>
      {config.pulauList.map(pulau => <Pulau key={pulau.id} {...pulau} onPress={() => onPulauClick(pulau)} />)}
      </MainBackground>
  );
};

