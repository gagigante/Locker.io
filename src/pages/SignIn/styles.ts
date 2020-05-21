import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #f83f61;
`;

// fb7a65 f83f61

export const LogoImage = styled.Image`
  width: 160px;
  height: 160px;
  margin: 0 auto;
`;

export const AppTitle = styled.Text`
  margin: 0 auto 30px;
  font-size: 24px;
  color: #fff;
`;

export const InputView = styled.View`
  background-color: rgba(255, 255, 255, 0.2);
  flex-direction: row;
  justify-content: space-between;
  margin: 0 30px;
  height: 54px;
  border-radius: 27px;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.4);
  margin-bottom: 15px;
`;

export const IconView = styled.View`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  height: 53px;
  width: 53px;
  border-radius: 27px;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 1);
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  margin-left: 10px;
  font-size: 16px;
`;

export const HideButton = styled.TouchableOpacity`
  margin: auto 15px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  /* width: 200px; */
  margin: 0 30px;
  height: 54px;
  border-radius: 27px;
`;

export const ButtonText = styled.Text`
  color: #f83f61;
  font-weight: bold;
`;

export const ModalView = styled.View`
  margin: auto;
  width: 250px;
  height: 300px;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
`;

export const ModalText = styled.Text`
  margin: 15px auto 0;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #fb7a65;
  justify-content: center;
  align-items: center;
  width: 150px;
  margin: 30px 10px;
  height: 54px;
  border-radius: 27px;
`;

export const ModalButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
