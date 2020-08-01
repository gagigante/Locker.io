import React, { useCallback, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Icon from 'react-native-vector-icons/Feather';

import getRealm from '../../database';
import { useAuth } from '../../hooks/auth';

import AlertModal from '../../components/AlertModal';

import {
  Container,
  LogoImage,
  AppTitle,
  InputView,
  IconView,
  TextInput,
  HideButton,
  Button,
  ButtonText,
} from './styles';

import Logo from '../../assets/locker_53876-25496.png';
import errorAnimation from '../../assets/11201-fail.json';

const SignUp: React.FC = () => {
  const { changeAppStage } = useAuth();

  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [hidePassword, setHidePassword] = useState(true);
  const [hideRepeatPassword, setHideRepeatPassword] = useState(true);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  const handleHideModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const registerNewUser = useCallback(async () => {
    const data = {
      id: uuidv4(),
      password,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('User', data);
    });

    setPassword('');
    setRepeatPassword('');
  }, [password]);

  const handleSubmit = useCallback(async () => {
    if (password !== '' && repeatPassword !== '') {
      if (password === repeatPassword) {
        registerNewUser();
        changeAppStage('2');
      } else {
        setModalText('As senhas não se correspondem!');
        setIsModalVisible(true);
      }
    } else {
      setModalText('Preencha os campos!');
      setIsModalVisible(true);
    }
  }, [changeAppStage, password, registerNewUser, repeatPassword]);

  return (
    <Container>
      <LogoImage source={Logo} />

      <AppTitle>Locker.io</AppTitle>

      <InputView>
        <IconView>
          <Icon name="lock" size={28} color="#f83f61" />
        </IconView>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={hidePassword}
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          placeholder="Senha"
          placeholderTextColor="rgba(255,255,255,0.6)"
        />
        <HideButton onPress={() => setHidePassword(!hidePassword)}>
          {hidePassword ? (
            <Icon name="eye" size={28} color="#fff" />
          ) : (
            <Icon name="eye-off" size={28} color="#fff" />
          )}
        </HideButton>
      </InputView>

      <InputView>
        <IconView>
          <Icon name="lock" size={28} color="#f83f61" />
        </IconView>
        <TextInput
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          secureTextEntry={hideRepeatPassword}
          placeholder="Confirmar senha"
          placeholderTextColor="rgba(255,255,255,0.6)"
          onSubmitEditing={handleSubmit}
        />
        <HideButton onPress={() => setHideRepeatPassword(!hideRepeatPassword)}>
          {hideRepeatPassword ? (
            <Icon name="eye" size={28} color="#fff" />
          ) : (
            <Icon name="eye-off" size={28} color="#fff" />
          )}
        </HideButton>
      </InputView>

      <Button onPress={handleSubmit}>
        <ButtonText> CRIAR CONTA </ButtonText>
      </Button>

      <AlertModal
        modalState={isModalVisible}
        animation={errorAnimation}
        animationWidth={125}
        animationHeight={125}
        message={modalText}
        buttonAction={handleHideModal}
        buttonText="Fechar"
      />
    </Container>
  );
};

export default SignUp;
