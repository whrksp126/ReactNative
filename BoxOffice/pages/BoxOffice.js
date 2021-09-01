import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import Title from '../components/Title';
import ListItem from '../components/ListItem';
import MovieName from '../components/MovieName';
import fetch from '../net/fetch';

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 24px;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const Rank = styled.Text`
  font-size: 14px;
  color: #999999;
  margin-right: 12px;
`;

function BoxOffice(props) {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    fetch(
      'https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=9495d895c166c1624f0a9ee4a08c6809&targetDt=20210829',
    )
      .then((data) => {
        // 원래 response로 작성을했으나 fetch를 통해 response을 data까지 보내도록 되어있어 바로 data를 작성한다.
        setList(data.boxOfficeResult.dailyBoxOfficeList);
      })
      .catch((error) => {
        alert(error.message);
      });
  },[])

  return (
    <Container>
      <Title>박스 오피스</Title>
      <Contents>
        {list.length === 0 && (
          <ActivityIndicator size={'large'}/>
          // 로딩 화면 
        )}
        {list.map((item) => (
          <ListItem
            key={item.movieCd}
            onPress={() => {
              props.navigation.navigate('MovieDetail', {movieCd: item.movieCd})}}>
            <Rank>{item.rank}</Rank>
            <MovieName>{item.movieNm}</MovieName>
          </ListItem>
        ))}
      </Contents>
    </Container>
  )
}

export default BoxOffice;