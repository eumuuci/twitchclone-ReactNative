import React, {useState} from 'react';
import { View, FlatList,ScrollView } from 'react-native';
import {
  ThumbCard,
  Thumbnail,
  ColumContainer,
  HeaderRow,
  Avatar,
  Username,
  Title,
  Category,
  TagContainer,
  TagText,
  ContainerBox
} from './styles'

import alanzokaIcon from '../../assets/images/alanzokaIcon.png'
import alanzokathumbnail from '../../assets/images/alanzokathumbnail.jpg'
import gaulesIcon from '../../assets/images/GaulesIcon.png'
import gaulesthumbnail from '../../assets/images/gaulesthumbnail.jpg'
import FlowPodcastIcon from '../../assets/images/FlowPodcastIcon.png'
import FlowPodcasthumbnail from '../../assets/images/FlowPodcasthumbnail.jpg'
import lubatvIcon from '../../assets/images/lubatvIcon.png'
import lubatvthumb from '../../assets/images/lubatvthumb.jpg'
import profile from '../../assets/images/profile.png'
import nicolasthumb from '../../assets/images/nicolasthumb.jpg'

export default function LiveChannelsList() {
    const [Channels, setChannels] = useState([
    {
    id: '1', icon: alanzokaIcon,user:'alanzoka', thumb: alanzokathumbnail, titulo: 'ONDE EU VIM PARAR? - SILVER CHAINS - Parte 1', categoria: 'Gameplay', tag1: 'Portuguese', tag2: 'Horror'
    },
    {
    id: '2', icon: gaulesIcon,user:'Gaules', thumb: gaulesthumbnail, titulo: 'Among us Ep #15', categoria: 'Gameplay', tag1: 'Portuguese', tag2: 'Puzzle'
    },
    {
    id: '3', icon: FlowPodcastIcon,user:'FlowPodcast', thumb: FlowPodcasthumbnail, titulo: 'Monark fala dos seus gostos', categoria: 'Just chatting', tag1: 'Portuguese', tag2: 'Talk-shows e podcasts'
    },
    {
    id: '4', icon: lubatvIcon,user:'lubatv', thumb: lubatvthumb, titulo: 'Dicas de Coach #1', categoria: 'Just chatting', tag1: 'Portuguese', tag2: 'Coaching'
    },
    {
    id: '5', icon: profile,user:'nicolascodes', thumb: nicolasthumb, titulo: 'eaterEgg', categoria: 'Just chatting', tag1: 'Portuguese', tag2: 'Surprise'
    },
    ])
 return (
   <View>
    <FlatList
    keyExtractor={ (item) => item.id }
    data={Channels}
    renderItem={ ({item}) => <RenderThumbs data={item}/> }/>
   </View>
  );
}

function RenderThumbs(props){
return(
  <ThumbCard>
    <Thumbnail source={props.data.thumb}/>
    <ColumContainer>
     <HeaderRow>
      <Avatar source={props.data.icon}/>
      <Username numberOfLines={1}>{props.data.user}</Username>
     </HeaderRow>
     <Title numberOfLines={1}>{props.data.titulo}</Title>
     <Category>{props.data.categoria}</Category>

     <TagContainer>
     <ContainerBox>
     <TagText>{props.data.tag1}</TagText>
     </ContainerBox>

     <ContainerBox>
     <TagText>{props.data.tag2}</TagText>
     </ContainerBox>
     </TagContainer>
    </ColumContainer>
  </ThumbCard>
)
}