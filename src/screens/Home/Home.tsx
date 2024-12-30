import React from 'react';
import { View, Image, Text } from 'react-native';
import logo from '../../../assets/bat-logo.png'
import { styles } from './HomeStyle';
import { BatButton } from '../../components/Button/BatButton';
import { BatLogo } from '../../components/BatLogo/BatLogo';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <BatLogo/>
      </View>
      <View>
        <BatButton nav="Form" text="Ativar Bat Sinal"/>        
      </View>
    </View>
  );
}