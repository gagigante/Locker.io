import styled from 'styled-components/native';

interface IslideViewProps {
  color: string;
}

export const Container = styled.View``;

export const SlideView = styled.View<IslideViewProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
`;

export const SlideImage = styled.Image`
  margin-bottom: 50px;
  width: 200px;
  height: 200px;
`;

export const SlideTextView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const SlideTitle = styled.Text`
  margin-bottom: 10px;
  font-size: 26px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const SlideText = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const ViewButton = styled.View`
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;
