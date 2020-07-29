/* eslint-disable global-require */
import React, { useCallback } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/auth';

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

interface Islides {
  key: string;
  title: string;
  text: string;
  image: NodeRequire;
  color: string;
}

const Presentation: React.FC = () => {
  const { changeAppStage } = useAuth();

  const slides: Islides[] = [
    {
      key: '0',
      title: 'Olá :)',
      text: 'Esse é o Locker.io, seu gerenciador de senhas.',
      image: require('../../assets/locker_53876-25496.png'),
      color: '#f83f61',
    },
    {
      key: '1',
      title: 'Guarde todas as suas senhas',
      text: 'Mantenha todas as suas senhas sempre ao seu alcance.',
      image: require('../../assets/safe-box.png'),
      color: '#96e6a1',
    },
    {
      key: '2',
      title: 'Organize-as',
      text:
        'E-mails, serviços, contas bancárias... Você pode classificar tudo e deixar ainda mais simples!',
      image: require('../../assets/organizer.png'),
      color: '#667eea',
    },
    {
      key: '3',
      title: 'Base de dados criptografada',
      text:
        'Não se preocupe, suas senhas estão seguras aqui. Nada de sair espalhando, hein!',
      image: require('../../assets/bd-wallpaper.png'),
      color: '#14d1db',
    },
  ];

  const handleSubmit = useCallback(async () => {
    await changeAppStage('1');
  }, [changeAppStage]);

  return (
    <AppIntroSlider
      data={slides}
      renderItem={({ item }: { item: Islides }) => (
        <SlideView color={item.color}>
          <SlideImage source={item.image} />
          <SlideTextView>
            <SlideTitle>{item.title}</SlideTitle>
            <SlideText>{item.text}</SlideText>
          </SlideTextView>
        </SlideView>
      )}
      showSkipButton
      renderSkipButton={() => (
        <Button onPress={handleSubmit}>
          <ButtonText>Pular</ButtonText>
        </Button>
      )}
      renderDoneButton={() => (
        <Button onPress={handleSubmit}>
          <Icon name="arrow-right" size={20} color="#fff" />
        </Button>
      )}
      renderNextButton={() => (
        <ViewButton>
          <Icon name="arrow-right" size={20} color="#fff" />
        </ViewButton>
      )}
    />
  );
};

export default Presentation;
