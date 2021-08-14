import React from 'react';
import { Image } from 'react-native';
import { 
Background,
NotFoundText
} from './styles'
import StatusBarPage from '../../components/StatusBarPage';

export default function ComingSoon() {
 return (
   <Background>
    <StatusBarPage
    backgroundColor="#010116"
    barStyle="light-content"/>

    <Image
    source={require('../../assets/images/404.jpg')}
    style={{width:350, height:350, resizeMode:'contain'}}/>
   </Background>
  );
}