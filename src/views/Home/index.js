import React from 'react';
import {Text } from 'react-native';
import MainBackground from '../../components/MainBackground'
import StarBadge from '../../components/StarBadge'
import RecentPlay from '../../components/RecentPlay'
import MainMenu from '../../components/MainMenu'
import HeadingText from '../../components/HeadingText'

export default () => {
  return (
    <MainBackground>
      <StarBadge/>
      <RecentPlay/>
      <MainMenu/>
      <HeadingText>KOLEKSI PULAU</HeadingText>
    </MainBackground>
  );
};

