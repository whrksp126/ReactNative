import React from 'react';
import styled from 'styled-components/native';
import Title from '../components/Title';
import Row from '../components/Row';
import ListItem from '../components/ListItem';
import MovieName from '../components/MovieName';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Input = styled.TextInput`
  flex: 1;
  border: 1px solid #e5e5e5;
  margin-left: 12px;
  padding: 0 12px;
`;

const Button = styled.Button``;

function Search(props) {
  const [keyworrd, setKeyworrd] = React.useState('');
  // 검색 input에 입력하는 값을 받옴
  const [list, setList] = React.useState([]);
  // 결과를 받아옴
  const [isLoding, setIsLoding] = React.useState(false);
  // 로딩중인 상태를 표시함(처음에는 로딩중이 아니니까 false)

  const search = React.useCallback(() => {
    let url =
      'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=9495d895c166c1624f0a9ee4a08c6809';
    url += '&movieNm=' + keyworrd;
    setIsLoding(true);
    axios
      .get(url)
      .then((response) => {
        // 데이터를 받아오면 실행할 것
        setIsLoding(false);
        setList(response.data.movieListResult.movieList);
      })
      .catch((error) => alert(error.message));
  }, [keyworrd]);

  // keyworrd가 입력될 때마다 search 함수가 새로 실행이됨

  return (
    <Container>
      <Title>영화 검색</Title>
      <Row>
        <Input value={keyworrd} onChangeText={(value) => setKeyworrd(value)} />
        <Button title="검색" onPress={search} />
      </Row>
      {isLoding ? (
        <ActivityIndicator size={'large'} />
      ) : (
        list.map((item) => (
          <ListItem
            key={item.movieCd}
            onPress={() => {
              props.navigation.navigate('MovieDetail', {movieCd: item.movieCd});
              // url에 들어가는 movieCd를 클릭한 item의 movieCd 값이 들어가도록 작성함
            }}>
            <MovieName>{item.movieNm}</MovieName>
          </ListItem>
        ))
      )}
    </Container>
  );
}

export default Search;
