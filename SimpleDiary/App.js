// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from './pages/List'
import Datall from './pages/Datall'
import Form from './pages/Form'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={List} options={{title:'일기 목록'}}/>
        {/* options에 title로 넣은 값은 stack에서 기본으로 지원하는 ← 버튼에 자동으로 등록되며 실제 title로도 보여짐 */}
        <Stack.Screen name="Datall" component={Datall} />
        <Stack.Screen name="Form" component={Form} options={{title:'일기 작성'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;