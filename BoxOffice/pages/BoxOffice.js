import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 24px;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 12px;
`;

const ListItem = styled.TouchableOpacity`
padding: 12px;
border-bottom-color: #e5e5e5;
border-bottom-width: 1px;
flex-direction: row;
align-items: center;
`;

const Rank = styled.Text`
  font-size: 14px;
  color: #999999;
  margin-right: 12px;
`;

const MovieName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

function BoxOffice(props) {

  const [list, setList] = React.useState([])

  React.useEffect(()=>{
    axios.get('https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=9495d895c166c1624f0a9ee4a08c6809&targetDt=20210829')
      .then(  response => {
        setList(response.data.boxOfficeResult.dailyBoxOfficeList);
        }  )
      .catch(  error => {
          alert(error.message);
        }  );
  },[])

  return (
    <Container>
        <Title>박스 오피스</Title>
        <Contents>
        {list.length === 0 && (
          <ActivityIndicator size={'large'}/>
          // 로딩 화면 
        )}
        {list.map(item => (
          <ListItem 
            key={ item.movieCd } 
            onPress={()=>{
              props.navigation.navigate(
                'MovieDetail', {movieCd: item.movieCd}
              )
          }}>
            <Rank>{item.rank}</Rank>
            <MovieName>{item.movieNm}</MovieName>
          </ListItem>
        ))}
      </Contents>
    </Container>
  )
}

export default BoxOffice;