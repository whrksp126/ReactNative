import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';

const KEY = 'photo-logs';

async function read(key) {
  const data = await AsyncStorage.getItem(key);
  let json = [];
  if(data !== null) {
    json = JSON.parse(data);
  }
  return json;
}

async function store(key, value) {
  await AsyncStorage.setItem(key, value);
}

async function readAll(){
  return await read(KEY)
}

// 특정 데이터만 가져올 수 있게 하기위해 만듬
async function readById(id){
  const data = await read(KEY);
  return _.find(data, element => element.id === id);
  // element의 id 가 위에서 입력받(인자로 들오온 id)은 id와 같은것만 찾겠다.
}

// 데이터를 추가함
async function append(value){
  const data = await read(KEY);
  data.push({
    ...value,
    // 기본적으로 받은 value는 전부 다 넣고
    id: new Date().getTime().toString(),
    // 현재날짜, 시간을 문자스타일로 id 값을 저장하게 한다.
  })
  return await store(KEY, JSON.stringify(data));
  // 방금 푸쉬한 값들을 문자로 만들어 저장한다
}



export default {
  read, store, readAll, readById, append
}