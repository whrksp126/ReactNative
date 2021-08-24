import React from 'react';
import {Button, Text, View} from 'react-native'


function List({navigation}) {
  // 구조 분해 할당
  // Stack.Screen 으로 사용되는 component는
  // props.navigation 로 navigation에 대한 정보들이 List 안으로 전달됨 
  return (
    <View>
      <Text>List 페이지 입니다.</Text>
      <Button 
        title="Datall 페이지로"
        onPress={()=>navigation.navigate("Datall")}  
      ></Button>
        <Button 
        title="Form 페이지로"
        onPress={()=>navigation.navigate("Form")}  
      ></Button>
    </View>
  );
}

export default List;