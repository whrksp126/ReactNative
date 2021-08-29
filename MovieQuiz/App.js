/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'; 
import styled from 'styled-components/native'
import movieList from './movieList'
import _ from 'lodash';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.View`
  flex: 1;
  padding: 24px;
`;

const Quiz = styled.Text`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #cc0000;
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
`;

// 초성 추출 함수
function getInitials(string) {
  return string
    .split('')
    .map(char => {
      const index = (char.charCodeAt(0) - 44032) / 28 / 21;
      if (index >= 0) return String.fromCharCode(index + 4352);
      return char;
    })
    .join('');
}

const App: () => React$Node = () => {

  const [ quizList, setQuizList] = React.useState(_.shuffle(movieList))
  const [ mode, setMode] = React.useState('quiz');
  const onPress = React.useCallback( () => {
    if(mode === 'answer') {
      setQuizList(quizList.slice(1))
      // quizList에 현재 보여지는 0 번째 항목은 필요가 없고 나머지 1.2.3.4 가 보여야 히니까 
      // slice를 이용해서 1번 부터 뒤의 나머지
    }
    setMode( mode === 'quiz' ? 'answer' : 'quiz')
    //현재모드가 quiz면 answer을 넣고 아니면 quiz를 넣어라
  }, [mode]);
  // onPress = () => {} 로 사용을 하면 화면에 변경될 일이 생길 때 마다 매번 재실행이 되어 onPress를 다시 생성이된다. 그래서 효율적이지 못 하다.
  // 변경이 필요할 때에만 생성이 되도록 하기 위해 useCallbaxk을 사용합니다.
  const retry = React.useCallback( ()=>{
    setQuizList(_.shuffle(movieList));
    // movieList의 원본은 그대로이니 다시 섞어서 setQuizList에 넣어주고
    setMode('quiz');
    // setMode를 quiz로 만들어 준다.
  }, [quizList]);

  return (
    <>
      <Container>
        <Contents>
          {quizList.length ? (
          <Quiz>{mode === 'quiz' ? getInitials(quizList[0]) : quizList[0]}</Quiz>
          ): (
            <Quiz>문제를 다 풀었어요~</Quiz>
          )}
        </Contents>
        {quizList.length ? (
        <Button onPress={onPress}>
          <Label>{mode === 'quiz' ? '정답 확인' : '다음'}</Label>
        </Button>
        ):(
          <Button onPress={retry}>
          <Label>다시 시작</Label>
        </Button>
        )}


      </Container>
    </>
  );
};

export default App;
