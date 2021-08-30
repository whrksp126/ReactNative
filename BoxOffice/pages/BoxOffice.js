import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const ListItem = styled.View`

`;

const MovieName = styled.View`
  font-size: 18px;
  font-weight: bold;
`;

function BoxOffice(props) {
  return (

    <Container>
      <Title>박스 오피스</Title>
      <ListItem>
        <MovieName>인질</MovieName>
      </ListItem>
      <ListItem>
        <MovieName>싱크홀</MovieName>
      </ListItem>
    </Container>

  )
}

export default BoxOffice;