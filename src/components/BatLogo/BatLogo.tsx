import React from 'react';
import { View, Image } from 'react-native';
import logo from '../../../assets/bat-logo.png'
export function BatLogo() {
  return (
    <View >
        <Image style={{resizeMode:'contain', height:200}} source={logo}/>       
    </View>
  );
}