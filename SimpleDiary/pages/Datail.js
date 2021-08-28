import React from 'react';
import Container from '../components/Container'
import Contents from '../components/Contents';
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Text = styled.Text`
  font-size: 20px;
  line-height: 28px;
`;

function Datail({navigation, route}) {
  navigation.setOptions({title: route.params.date})
  // title: '상단 label에 표시되는 글'
  // route의 params(우리가 넘겨 받은 데이터, 파라미터) 안의 date

  const [text, setText] = React.useState('');
  React.useEffect(()=>{
    AsyncStorage.getItem('list')
    .then( data => {
      const list = JSON.parse(data);
      // 리스트 배열 형태로 데이터를 가져옴
      const diary = list.find( element => element.date === route.params.date );
      setText(diary.text)
    })
  }, [])

  return (
    <Container>
      <Contents>
        <Text>{text}</Text>
        {/* list에서 넘겨 받은 해당 item의 text 데이터 */}
      </Contents>
    </Container>
  );
}

export default Datail;