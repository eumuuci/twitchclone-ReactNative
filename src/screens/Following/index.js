import React from 'react';
import {ScrollView} from 'react-native'
import { 
Background,
Title,
HeadingText
} from './styles'

import StatusBarPage from '../../components/StatusBarPage';
import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import LiveChannelsList from '../../components/LiveChannelsList';
import OfflineChannels from '../../components/OfflineChannels';

export default function Following() {
 return (
   <ScrollView>
   <Background>
    <StatusBarPage
    backgroundColor="#000014"
    barStyle="light-content"/>
    <Header/>

    <HeadingText>Following</HeadingText>
    <Title>FOLLOWED CATEGORIES</Title>
     <CategoryList/>
    <Title>LIVE CHANNELS</Title>
     <LiveChannelsList/>
    <Title>CONTINUE WATCHING</Title>
     <LiveChannelsList/>
    <Title>OFFLINE CHANNELS</Title>
     <OfflineChannels/>

   </Background>
   </ScrollView>
  );
}