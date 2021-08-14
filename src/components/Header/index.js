import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { 
    Background, 
    Avatar, 
    OnlineStatus, 
    RightButtons,
    Button } from './styles'

export default function Header() {
 return (
   <Background>
    <Avatar>
     <Image
     source={require('../../assets/images/profile.png')}
     style={{width:'100%', height:'100%', borderRadius:50}}/>
     <OnlineStatus/>
    </Avatar>

    <RightButtons>
     <Button>
     <Icon name="bell-outline" color="#fff" size={26}/>
     </Button>

     <Button>
     <Icon name="message-outline" color="#fff" size={26}/>
     </Button>

     <Button>
     <Icon name="magnify" color="#fff" size={26}/>
     </Button>
    </RightButtons>
   </Background>
  );
}