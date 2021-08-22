import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import styled from 'styled-components/native'
import Constants from 'expo-constants';
import _ from 'lodash';

const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

const Cotents = styled.ScrollView`
  flex: 1;
  padding: 8px 24px
`;

const TodoItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TodoItemText = styled.Text`
  font-size: 20px;
  flex: 1;
`;

const TodoItemButton = styled.Button`

`;

const InputContainer = styled.View`
  flex-direction: row;
  padding: 8px 24px;
`;

const Input = styled.TextInput`
  border : 1px solid #ff0000;
  flex: 1;
`;

const Button = styled.Button`

`;

const TempText = styled.Text`
  font-size: 20px
  margin-bottom: 12px
`;

export default function App() {

  const [list, setList] = React.useState([
  ]);

  const [inputTodo, setInputTodo] = React.useState(' ');

  // 리턴은 컴포넌트, 컴포넌트로 일어진 배열
  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Cotents>
        {list.map( item => {
          return (
            <TodoItem key={ item.id }>
            <TodoItemText>
              { item.todo }
            </TodoItemText>
            <TodoItemButton 
              title = "삭제" 
              onPress={ ()=>{ 
                setList(_.reject( list, element => element.id === item.id ));
                // list 안의 id 값이 선택한 item.id 와 같은 것을 제거 한다
                // 선택 item 을 제거하고 다시 setlist로 설정해 보여지게 함
              } } 
            />
          </TodoItem>
          )
        })}
      </Cotents>

      <InputContainer>
        <Input 
          value = {inputTodo} 
          onChangeText={ value => setInputTodo( value )}
          // 리액트로 작업을 하면 값과 업데이트를 동시에 지정해야 함
        />
        <Button 
          title="전송" 
          onPress={ () => {
            // 원본 배열을 수정하는 push는 사용 불가
            // inputTodo.push({...});

            // 내용 없이 전송하면 아무 동작을 하지 않게 함
            if( inputTodo ===  '' ) {
              return;
            }

            const newItem = {
              id: new Date().getTime().toString(),
              // 현재 시간을 가지고 id 를 만든다
              // getime 을 이용해 유니크 타임 스탬프를 가지고올 수 있고
              // tostring 을 이용해 문자열로 변환한다.
              todo: inputTodo,
            };
            setList([
              ...list, // 전개 연산자
              newItem,
            ]);
            setInputTodo('');
            // 전송하고 나면 내용을 지울 수 있게 함
          } } 
        />
      </InputContainer>
      </KeyboardAvoidingView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
