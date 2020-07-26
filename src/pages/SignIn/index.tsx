import React, { useState, useEffect, useCallback } from 'react';
import { Keyboard } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

import Modal from 'react-native-modal';
import Lottie from 'lottie-react-native';

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
import errorAnimation from '../../assets/11201-fail.json';
import fingerprintAnimation from '../../assets/lf30_editor_7MsGRA.json';

const SignIn: React.FC = () => {
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  const [isFingerprintModalVisible, setIsFingerprintModalVisible] = useState(
    false,
  );
  const [shouldRequestBiometry, setShouldRequestBiometry] = useState(true);

  const [availableSensor, setAvailableSensor] = useState<
    'TouchID' | 'FaceID' | 'Biometrics' | undefined
  >(undefined);

  // ONLY FOR DEBUG INFO
  const [errorMessage, setErrorMessage] = useState('');
  // const [biometryType, setbiometryType] = useState('');

  useEffect(() => {
    async function getAvailableSensors(): Promise<void> {
      const { biometryType } = await ReactNativeBiometrics.isSensorAvailable();

      setAvailableSensor(biometryType);
    }

    getAvailableSensors();
  }, []);

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
          onFocus={() => handleFingerprintShowed()}
          onSubmitEditing={() => handleSubmit()}
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

      <Button onPress={() => handleSubmit()}>
        <ButtonText>LOGIN</ButtonText>
      </Button>

      <Modal isVisible={isModalVisible}>
        <ModalView>
          <Lottie
            style={{ width: 125 }}
            resizeMode="contain"
            source={errorAnimation}
            autoPlay
            loop={false}
          />
          <ModalText>{modalText}</ModalText>
          <ModalButton
            onPress={() => {
              setIsModalVisible(false);
            }}
          >
            <ModalButtonText>Fechar</ModalButtonText>
          </ModalButton>
        </ModalView>
      </Modal>

      <Modal isVisible={isFingerprintModalVisible}>
        <ModalView>
          <Lottie
            style={{ width: 150 }}
            resizeMode="contain"
            source={fingerprintAnimation}
            autoPlay
            loop={false}
          />
          <ModalText>Entre usando sua digital</ModalText>
          <ModalButton
            onPress={() => {
              handleFingerprintDismissed();
            }}
          >
            <ModalButtonText>Usar senha</ModalButtonText>
          </ModalButton>
        </ModalView>
      </Modal>
    </Container>
  );
};

export default SignIn;
