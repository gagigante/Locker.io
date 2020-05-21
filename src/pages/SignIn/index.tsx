import React, { useState, useEffect, useCallback } from 'react';
import { Platform } from 'react-native';

import ReactNativeBiometric from 'react-native-biometrics';

import Icon from 'react-native-vector-icons/Feather';

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
  ModalView,
  ModalText,
  ModalButton,
  ModalButtonText,
} from './styles';

import Logo from '../../assets/locker_53876-25496.png';

const SignIn: React.FC = () => {
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  const [isFingerprintModalVisible, setIsFingerprintModalVisible] = useState(
    false,
  );
  const [shouldRequestBiometry, setShouldRequestBiometry] = useState(true);

  // ONLY FOR DEBUG INFO
  const [errorMessage, setErrorMessage] = useState('');
  const [biometryType, setbiometryType] = useState('');

  // const checkBiometrics = useCallback(async (): Promise<string> => {
  //   console.log('teste');

  //   return 'Gabriel';
  // }, []);

  // useEffect(() => {
  //   const name = checkBiometrics();

  //   console.log(name);
  // }, []);

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
          // onFocus={() => handleFingerprintShowed()}
          onFocus={() => {
            console.log('teste');
          }}
          // onSubmitEditing={() => handleSubmit()}
          onSubmitEditing={() => {
            console.log('teste');
          }}
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          secureTextEntry={hidePassword}
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

      <Button onPress={() => console.log('teste')}>
        <ButtonText> LOGIN </ButtonText>
      </Button>

      {/* <Modal isVisible={isModalVisible}>
        <ModalView>
          <Lottie style={{ width: 125 }} resizeMode="contain" source={errorAnimation} autoPlay loop={false} />
          <ModalText>{modalText}</ModalText>
          <ModalButton onPress={() => {setIsModalVisible(false)}}>
            <ModalButtonText>Fechar</ModalButtonText>
          </ModalButton>
        </ModalView>
      </Modal>

      <Modal isVisible={isFingerprintModalVisible}>
       <ModalView>
          <Lottie style={{ width: 150 }} resizeMode="contain" source={fingerprintAnimation} autoPlay loop={false} />
          <ModalText>Entre usando sua digital</ModalText>
          <ModalButton onPress={() => {handleFingerprintDismissed()}}>
            <ModalButtonText>Usar senha</ModalButtonText>
          </ModalButton>
        </ModalView>
      </Modal> */}
    </Container>
  );
};

export default SignIn;
