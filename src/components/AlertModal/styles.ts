import styled from 'styled-components/native';

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
