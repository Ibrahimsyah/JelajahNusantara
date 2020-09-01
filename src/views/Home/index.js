import React from 'react';
import {Text } from 'react-native';
import MainBackground from '../../components/MainBackground'
import StarBadge from '../../components/StarBadge'
import RecentPlay from '../../components/RecentPlay'
export default () => {
  return (
    <MainBackground>
      <StarBadge/>
      <RecentPlay/>
    </MainBackground>
  );
};

