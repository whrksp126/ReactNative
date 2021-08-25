import React from 'react';
import Container from '../components/Container'
import Contents from '../components/Contents';
import Button from '../components/Button';
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Label = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Input = styled.TextInput`
  width: 100%;
  border: 1px solid #666666;
  padding: 4px;
`;

function Form({navigation}) {

  const [date, setDate] = React.useState('');
  const [text, setText] = React.useState('');

  const store = async () => {
    if( date === '' ) return;
    if( text === '' ) return;
    // date text 에 대한 폼 검즘

    let list = await AsyncStorage.getItem('list');
    if( list === null ) {
      list = [];
      // 데이터가 있는지 확인하고
    }
    else {
      list = JSON.parse( list );
      // 데이터가 string 으로 왔을 테니 parse을 통해 JSON형식으로 변환함
    }
    list.push({
      // 현재의 데이터는 state로 관리되는 형태가 아니고 AsyncStorage에서 꺼낸 객체이니까 바로 푸쉬가 가능하다(immer을 안써도 됨)
      date,
      text,
      // 데이터를 추가하고
    });
    await AsyncStorage.setItem('list', JSON.stringify( list ));
    // 방금 추가한 list를 데이터 안에 넣음
    // 저장하고
    navigation.goBack();
    // 완료 되면 화면을 이동시킴
  }

  return (
    <Container>
      <Contents>
          <Label>날짜</Label>
        <Input 
          placeholder={'YYYY-MM-DD 형식으로 입력하세요'}
          value={date}  
          onChangeText={ value => setDate( value ) }
          // 입력 받은 데이터를 바로 화면에 보이게 해줌
        />
          <Label>내용</Label>
        <Input 
          multiline={true} 
          // mutiline으로 한줄 이상의 글 작성 가능 
            style={ { height: 200 } }
          // style로 개별 속성을 지정함
          value={text}  
          onChangeText={ value => setText( value ) }
        />
      </Contents>
      <Button 
        onPress={store}>
        저장
      </Button>
    </Container>
  );
}

export default Form;