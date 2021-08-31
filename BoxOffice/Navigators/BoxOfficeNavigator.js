import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoxOffice from '../pages/BoxOffice'
import MovieDetail from '../pages/MovieDetail'
import App from '../App';

const Stack = createNativeStackNavigator();

function BoxOfficeNavigator() {
  return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BoxOffice" component={BoxOffice} />
          <Stack.Screen name="MovieDetail" component={MovieDetail} />
        </Stack.Navigator>
  )
}

export default BoxOfficeNavigator