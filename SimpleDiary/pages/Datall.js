import React from 'react';
import {Button, Text, View} from 'react-native'

function Datall({navigation}) {
  return (
    <View>
      <Text>Datall 페이지 입니다.</Text>
      <Button 
        title="이전 페이지로"
        onPress={()=>navigation.goBack()}
        // 바로 이전 페이지로 이동한다.  
      ></Button>
    </View>
  );
}

export default Datall;