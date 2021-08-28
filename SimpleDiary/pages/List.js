import React from 'react';
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';

const ListItem = styled.TouchableOpacity`
  width: 100%;
  padding: 12px 0
  border-bottom-color: #aaaaaa;
  border-bottom-width: 1px;
`;

const Label = styled.Text`
  font-size: 20px;
`;

function List({navigation}) {
  // 구조 분해 할당
  // Stack.Screen 으로 사용되는 component는
  // props.navigation 로 navigation에 대한 정보들이 List 안으로 전달됨 

  // component가 화면에 표시되는 시점에 데이터를 읽어오도록 해야함
  const [list, setList] = React.useState([]);
  const load = async () => {
    const data = await AsyncStorage.getItem('list');
    // 스토리지에 있는 list를 불러옴
    // list 불러오기가 완료 됐을 때
    if(data !== null) {
      // list에 데이터가 있을 때
      setList(JSON.parse(data));
      // string으로 저장된 data를 JSON데이터로 만들어 setList로 저장한다.
    }
  }
    React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // 포커스가 됐을 때 무슨 동작을 할겨냐? 
      load();
      // 포커스가 일어났을 때에 load가 실행되고
    });
    load();
    // 포커스가 되지 않았을 때도 load할 수 있게함
    // 개발 과정에서 리플레쉬 하거나 했을 때 정상 동작하게 함
    return unsubscribe;
  }, [navigation]);

  return (
    <Container>
      <Contents>
        {_.sortBy(list, 'date').map(item => {
          return(
            <ListItem 
              key={item.date}
              onPress={ () => navigation.navigate('Datail', {date: item.date}) }>
                {/* 버튼을 클릭하면 date와 text 데이터를 같이 보내준다. */}
            <Label>{item.date}</Label>
          </ListItem>
          )
        })}
      </Contents>
      <Button 
        onPress={()=> navigation.navigate('Form')}>
        새 일기 작성
      </Button>
    </Container>
  );
}

export default List;