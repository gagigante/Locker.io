import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Lottie from 'lottie-react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';

import Logo from '../../assets/locker_53876-25496.png';
// import errorAnimation from '../../assets/11201-fail.json';

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

const SignUp: React.FC = () => {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [hidePassword, setHidePassword] = useState(true);
  const [hideRepeatPassword, setHideRepeatPassword] = useState(true);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  // useEffect(() => {
  //   async function firstAccessRegistration() {
  //     try {
  //       await AsyncStorage.setItem('FirstAccess', '1');
  //     } catch (error) {
  //       // alert(error);
  //     }
  //   }

  //   firstAccessRegistration();
  // }, []);

  // RETURNS LAST ID IN DATABASE
  // async function getCurrentId() {
  //   const realm = await getRealm();
  //   const results = realm.objects('User').sorted('id');
  //   const id = results.length > 0 ? results[results.length - 1].id + 1 : 1;

  //   return id;
  // }

  // SAVE DATA IN DATABASE
  // async function addNewUser() {
  //   const currentId = await getCurrentId();

  //   const data = {
  //     id: currentId,
  //     password,
  //   };

  //   const realm = await getRealm();
  //   realm.write(() => {
  //     realm.create('User', data);
  //   });

  //   setPassword('');
  //   setRepeatPassword('');
  // }

  // INSERT DEFAULT CATEGORIES IN DB
  // async function insertDefaultCategories() {
  //   try {
  //     const realm = await getRealm();

  //     realm.write(() => {
  //       realm.create('Category', {
  //         id: '00001',
  //         CategoryName: 'Serviços',
  //         CategoryColor: 'blue',
  //       });
  //       realm.create('Category', {
  //         id: '00002',
  //         CategoryName: 'E-mail',
  //         CategoryColor: 'red',
  //       });
  //       realm.create('Category', {
  //         id: '00003',
  //         CategoryName: 'Banco',
  //         CategoryColor: 'green',
  //       });
  //       realm.create('Category', {
  //         id: '00004',
  //         CategoryName: 'Aplicativo',
  //         CategoryColor: 'yellow',
  //       });
  //       realm.create('Category', {
  //         id: '00005',
  //         CategoryName: 'Cartão',
  //         CategoryColor: 'pink',
  //       });
  //     });
  //   } catch (err) {
  //     alert(err);
  //   }
  // }

  // async function handleSubmit() {
  //   if (password !== '' && repeatPassword !== '') {
  //     if (password === repeatPassword) {
  //       insertDefaultCategories();
  //       addNewUser();

  //       try {
  //         await AsyncStorage.setItem('FirstAccess', '2');
  //       } catch (error) {
  //         // alert(error);
  //       }

  //       navigation.navigate('Login');
  //     } else {
  //       setModalText('As senhas não se correspondem!');
  //       setIsModalVisible(true);
  //     }
  //   } else {
  //     setModalText('Preencha os campos!');
  //     setIsModalVisible(true);
  //   }
  // }

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
        />
        <HideButton onPress={() => setHideRepeatPassword(!hideRepeatPassword)}>
          {hideRepeatPassword ? (
            <Icon name="eye" size={28} color="#fff" />
          ) : (
            <Icon name="eye-off" size={28} color="#fff" />
          )}
        </HideButton>
      </InputView>

      <Button onPress={() => console.log('entrou')}>
        <ButtonText> CRIAR CONTA </ButtonText>
      </Button>

      <Modal isVisible={isModalVisible}>
        <ModalView>
          {/* <Lottie
            style={{ width: 125 }}
            resizeMode="contain"
            source={errorAnimation}
            autoPlay
            loop={false}
          /> */}
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
    </Container>
  );
};

export default SignUp;
