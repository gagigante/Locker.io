import React, { useEffect } from 'react';
// import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';

import Icon from 'react-native-vector-icons/Feather';

import {
  SlideView,
  SlideImage,
  SlideTextView,
  SlideTitle,
  SlideText,
  Button,
  ButtonText,
  ViewButton,
} from './styles';

import imglogo from '../../assets/locker_53876-25496.png';

const Presentation: React.FC = () => {
  interface Islides {
    key: string;
    title: string;
    text: string;
    image: NodeRequire;
    backgroundColor: string[];
  }

  const slides: Islides[] = [
    {
      key: '0',
      title: 'Olá :)',
      text: 'Esse é o Locker.io, seu gerenciador de senhas.',
      image: require('../../assets/locker_53876-25496.png'),
      backgroundColor: ['#fb7a65', '#f83f61'],
    },
    {
      key: '1',
      title: 'Guarde todas as suas senhas',
      text: 'Mantenha todas as suas senhas sempre ao seu alcance.',
      image: require('../../assets/safe-box.png'),
      backgroundColor: ['#d4fc79', '#96e6a1'],
    },
    {
      key: '2',
      title: 'Organize-as',
      text:
        'E-mails, serviços, contas bancárias... Você pode classificar tudo e deixar ainda mais simples!',
      image: require('../../assets/organizer.png'),
      backgroundColor: ['#764ba2', '#667eea'],
    },
    {
      key: '3',
      title: 'Base de dados criptografada',
      text:
        'Não se preocupe, suas senhas estão seguras aqui. Nada de sair espalhando, hein!',
      image: require('../../assets/bd-wallpaper.png'),
      backgroundColor: ['#4facfe', '#00f2fe'],
    },
  ];

  return (
    <AppIntroSlider
      data={slides}
      renderItem={({ item }) => (
        <SlideView>
          <SlideImage source={require('imglogo')} />
          <SlideTextView>
            <SlideTitle>{item.title}</SlideTitle>
            <SlideText>{item.text}</SlideText>
          </SlideTextView>
        </SlideView>
      )}
      showSkipButton
      renderSkipButton={() => (
        <Button
          onPress={() => {
            console.log('enter');
          }}
        >
          <ButtonText>Pular</ButtonText>
        </Button>
      )}
      renderDoneButton={() => (
        <Button
          onPress={() => {
            console.log('enter');
          }}
        >
          <Icon name="arrow-right" size={20} color="#ff9000" />
        </Button>
      )}
      renderNextButton={() => (
        <ViewButton>
          <Icon name="arrow-right" size={20} color="#ff9000" />
        </ViewButton>
      )}
    />
  );
};

export default Presentation;
