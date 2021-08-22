import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import styled from  'styled-components/native';
import Container from './components/Container';
import Row from './components/Row';
import moment from 'moment';

const Label = styled.Text`
font-size: 36px;
font-weight: bold;
`;

export default function App() {
    const [now, setNow] = React.useState(moment());
  React.useEffect(()=>{
    // 동작
    // 1. 이 컴포넌트가 처음으로 화면에 표시될 때
    // 2, 주시하는 대상에 변화가 일어났을 때
    setInterval( ()=>{
      setNow( moment() );
    }, 1000)
  }, [/* 주시 대상*/]);

  return (
    <Container>
      <Row>
        <Text>{now.format('ddd / MMM  Do/ YYYY ')}</Text>
      </Row>
      <Row>
        <Label>{now.format('HH')}</Label>
        <Label>{parseInt(now.format('s'),10)% 2 === 1 ? ':' : ' '}</Label>
        <Label>{now.format('mm')}</Label>
        <Label>{parseInt(now.format('s'),10)% 2 === 1 ? ':' : ' '}</Label>
        <Label>{now.format('ss')}</Label>
      </Row>
    </Container>
  );
}
