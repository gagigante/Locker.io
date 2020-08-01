import React from 'react';
import Modal from 'react-native-modal';
import Lottie from 'lottie-react-native';

import { ModalView, ModalText, ModalButton, ModalButtonText } from './styles';

interface Props {
  modalState: boolean;
  animation: any;
  animationWidth: number;
  animationHeight: number;
  message: string;
  buttonText: string;
  buttonAction(): void;
}

const AlertModal: React.FC<Props> = ({
  modalState,
  animationWidth,
  animationHeight,
  animation,
  message,
  buttonText,
  buttonAction,
}) => {
  return (
    <Modal isVisible={modalState}>
      <ModalView>
        <Lottie
          style={{ width: animationWidth, height: animationHeight }}
          resizeMode="contain"
          source={animation}
          autoPlay
          loop={false}
        />
        <ModalText>{message}</ModalText>
        <ModalButton onPress={buttonAction}>
          <ModalButtonText>{buttonText}</ModalButtonText>
        </ModalButton>
      </ModalView>
    </Modal>
  );
};

export default AlertModal;
