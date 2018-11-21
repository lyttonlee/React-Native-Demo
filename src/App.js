import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Alert} from 'react-native'
import {StackNavigator, createStackNavigator} from 'react-navigation'

// import {Provider} from 'react-redux'

// import store from './reducer/store'

import Home from './views/home'
import List from './views/list'
import TouchAble from './views/TouchAble'
import Props from './views/Props'
import MovieLists from './views/MovieLists'
import Tab from './views/Tab'


const App = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    List: {
      screen: List,
      navigationOptions: {
        header: null
      }
    },
    TouchAble,
    Props: {
      screen: Props
    },
    MovieLists,
    Tab
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'screen'
    navigationOptions: {
      // header: null
      headerStyle: {
        backgroundColor: 'rgba(86,74,95,0.9)'
      },
      headerTintColor: '#fff',
      headerRight: (
        <Button
          onPress={() => Alert.alert('routeInfo' ,'这里可以是分享信息！')}
          // onPress={() => navigation.goBack()}
          title={'share'}
          color="#111"
        />
      )
    },
    mode:'modal'
  }
)
export default App
