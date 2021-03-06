import React from 'react';
import BoxOfficeNavigator from './BoxOfficeNavigator';
import SearchNavigator from './SearchNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="BoxOfficeNavigator"
        component={BoxOfficeNavigator}
        options={{drawerLabel: '박스 오피스'}}
      />
      <Drawer.Screen
        name="SearchNavigator"
        component={SearchNavigator}
        options={{drawerLabel: '영화 검색'}}
      />
    </Drawer.Navigator>
  );
}

export default AppNavigator;