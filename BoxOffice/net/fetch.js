import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

async function fetch(url) {
  try {
    let result = await AsyncStorage.getItem(url);
    // 요청 받은 url을 AsyncStorage에서 먼저 탐색하도록 작성함
    //.then() 이렇게 작성도 가능함 하지만 await을 사용함
    if (result !== null) {
      return JSON.parse(result);
      // 데이터를 배열로 만듬
    }
    const response = await axios.get(url);
    AsyncStorage.setItem(url, JSON.stringify(response.data));
    // stringify로 데이터를 string 으로 만듬
    return response.data;
  } catch (error) {
    alert(error.message);
  };
};
export default fetch;
