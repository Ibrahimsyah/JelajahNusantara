import React from 'react';
import MainBackground from '../../components/MainBackground'
import StarBadge from '../../components/StarBadge'
import RecentPlay from '../../components/RecentPlay'
import MainMenu from '../../components/MainMenu'
import HeadingText from '../../components/HeadingText'
import Pulau from '../../components/Pulau'
import config from './index.config'

export default () => {
  return (
    <MainBackground>
      <StarBadge />
      <RecentPlay />
      <MainMenu />
      <HeadingText>KOLEKSI PULAU</HeadingText>
      {config.pulauList.map(pulau => <Pulau key={pulau.id} {...pulau} />)}
    </MainBackground>
  );
};

