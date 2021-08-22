import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import styled from 'styled-components/native'
import Constants from 'expo-constants';
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const Check = styled.TouchableOpacity`
  margin-right: 4px
`;

const CheckIcon = styled.Text`
  font-size: 20px
`;

export default function App() {

  const [list, setList] = React.useState([
  ]);

  const [inputTodo, setInputTodo] = React.useState(' ');

  React.useEffect(()=>{
  // 앱이 처음 실행이 됬을 때 데이터를 읽어오도록 함
    AsyncStorage.getItem('list')
    // list 라는 이름으로 데이터를 가져옴
      .then(data => {
        // 데이터를 처음 불러오는 부분ㄴ
        if(data !== null){
          // 데이터가 null 이면 데이터가 한번도 생성이 된적이 없을때
          // 데어티가 null 이 아니면 무언가 저장된 데이터가 있다는 것임
          setList(JSON.parse(data));
          // 불러온 데이터는 string 이니까 실제 JOSN 데이터로 변경하는 과정을 거침
          // 변경한 데이터를 setList 에 넣어줌
        }
        else{

        }
      })
      .catch(error => {
        alert(error.message);
      })
  },[])

  const store = (newList) => {
    // 새로운 목록 newList 를 받아서 처리를 한다
    setList(newList);
    // setList에 새로운 데이터를 저장함
    AsyncStorage.setItem('list', JSON.stringify(newList));
    // JSON.stringify(newList)를 이용해 오브젝트를 string으로 변환함
    // list라는 키에 stringify한 결과인 strign 데이터를 저장해둔다
  }

  // 리턴은 컴포넌트, 컴포넌트로 일어진 배열
  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Cotents>
        {list.map( item => {
          return (
            <TodoItem key={ item.id }> 
            <Check>
              <CheckIcon>
              {item.done ? '☑️' : '✓'}  
              </CheckIcon>
            </Check>
            <TodoItemText>
            
              { item.todo }
            </TodoItemText>
            <TodoItemButton 
              title = "삭제" 
              onPress={ ()=>{ 
                store(_.reject( list, element => element.id === item.id ));
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
              done: false,
            };
            store([
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
