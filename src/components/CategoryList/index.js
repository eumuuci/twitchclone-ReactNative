import React, {useState} from 'react';
import { FlatList,View } from 'react-native';
import {
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  ViewsNumber
} from './styles'
import csgo from '../../assets/images/csgo.jpg';
import fortnite from '../../assets/images/fortnite.jpg';
import gta from '../../assets/images/gta.jpg';
import lol from '../../assets/images/lol.jpg';
import minecraft from '../../assets/images/minecraft.jpg';
import valorant from '../../assets/images/valorant.jpg';

export default function CategoryList() {
  const [cards, setCards] = useState([
    {id: '1', name: 'Counter Strike Global Ofensive', card: csgo, views: 55.2},
    {id: '2',name: 'Fortnite', card: fortnite, views: 188},
    {id: '3',name: 'Grand Theft Auto V', card: gta, views: 171.7},
    {id: '4',name: 'League of Legends', card: lol, views: 299.2},
    {id: '5',name: 'Minecraft', card: minecraft, views: 154.6},
    {id: '6',name: 'Valorant', card: valorant, views: 183.2},
  ]);
  
 return (
  <View>
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={cards}
    renderItem={ ({item}) => <RenderCards data={item}/>}
    keyExtractor={ (item) => item.id }
    style={{marginBottom:10}}
    />
  </View>
  );
}

function RenderCards(props){
return(
  <CategoryContainer>
  <CategoryImage source={props.data.card}/>
  <CategoryName numberOfLines={1}>{props.data.name}</CategoryName>
  <CategoryStatus>
   <RedCircle/>
   <ViewsNumber>{props.data.views}K</ViewsNumber>
  </CategoryStatus>
</CategoryContainer>
)
}