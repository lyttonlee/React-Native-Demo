import React, { Component } from 'react'
// import { Text, StyleSheet, View } from 'react-native'
import {StackNavigator} from 'react-navigation'

import {Provider} from 'react-redux'

import store from './reducer/store'

import Home from './views/home'
import List from './views/list'
import TouchAble from './views/TouchAble'
import Props from './views/Props'
import MovieLists from './views/MovieLists'
const App = StackNavigator(
  {
    Home,
    List,
    TouchAble,
    Props,
    MovieLists
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen'
  }
)
export default App
