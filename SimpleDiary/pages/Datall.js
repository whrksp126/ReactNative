import React from 'react';
import Container from '../components/Container'
import Contents from '../components/Contents';
import styled from 'styled-components/native'

const Text = styled.Text`
  font-size: 20px;
  line-height: 28px;
`;

function Datall({navigation}) {
  return (
    <Container>
      <Contents>
        <Text>{`오늘 비가 정말 많이 왔다ㅠㅠ`}</Text>
      </Contents>
    </Container>
  );
}

export default Datall;