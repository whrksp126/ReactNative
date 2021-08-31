import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import BoxOfficeNavigator from './Navigators/BoxOfficeNavigator'

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

const App: () => Node = () => {

  return (
    <>
      <NavigationContainer theme={Theme}>
        <BoxOfficeNavigator/>
      </NavigationContainer>
    </>
  );
};

export default App;