import React from 'react';
import styled from 'styled-components/native'

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #000000;
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

function Button(props) {
  return (
    <Container onPress={ props.onPress }>
      {/* 실제 사용하는 쪽에서도 똑같이 onPress라는 이름으로 함수를 넣음 */}
      <Label>{props.children}</Label>
      {/* 라벨에 표시되는 이름은 외부에서 children으로 받음 */}
    </Container>
  )
}

export default Button;