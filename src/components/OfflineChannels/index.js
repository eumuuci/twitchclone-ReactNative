import React, {useState} from 'react';
import { View,FlatList } from 'react-native';
import {
Background,
ChannelIcon,
ChannelName,
Videos,
VideosContainer
} from './styles'

import saikojogaIcon from '../../assets/images/saikojogaIcon.jpg';
import ellahawkIcon from '../../assets/images/ellahawkIcon.jpeg';
import smzinhoIcon from '../../assets/images/smzinhoIcon.png';
import oMeiaUmIcon from '../../assets/images/oMeiaUmIcon.png';
import jukesIcon from '../../assets/images/jukesIcon.png';
import viadinhoIcon from '../../assets/images/viadinhoIcon.jpg';
import brkseduIcon from '../../assets/images/brkseduIcon.png';

export default function OfflineChannels() {
    const [offChannels, setOffChannels] = useState([
        {id: '1', icon: saikojogaIcon, name: 'saikojoga', newvideos: '2'},
        {id: '2', icon: ellahawkIcon, name: 'Ellahawk', newvideos: '24'},
        {id: '3', icon: smzinhoIcon, name: 'Smzinho', newvideos: '12'},
        {id: '4', icon: oMeiaUmIcon, name: 'oMeiaUm', newvideos: '75'},
        {id: '5', icon: jukesIcon, name: 'jukes', newvideos: '23'},
        {id: '6', icon: viadinhoIcon, name: 'deercheerup', newvideos: '27'},
        {id: '7', icon: brkseduIcon, name: 'BRKsEDU', newvideos: '3'},
    ])
 return (
   <View>
    <FlatList
    data={offChannels}
    renderItem={ ({item}) => <OffLineList data={item}/> }
    keyExtractor={ (item) => item.id }/>
   </View>
  );
}

function OffLineList(props){
return(
   <Background>
    <ChannelIcon source={props.data.icon}/>
    <VideosContainer>
    <ChannelName>{props.data.name}</ChannelName>
    <Videos>{props.data.newvideos} news videos</Videos>
    </VideosContainer>
   </Background> 
)
}